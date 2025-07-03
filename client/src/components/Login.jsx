import React, { useState, useEffect, useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Login');
    const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async(e) => {
        e.preventDefault();

        try {

            if(state === 'Login') {
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password});

                if(data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                }else{
                    toast.error(data.message);
                }
            }else{
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password});
                if(data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                }else{
                    toast.error(data.message);
                }
            }

        }catch(err) {
            toast.error(err.message);
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

  return (
    <div className='fixed inset-0 z-10 backdrop-blur-md bg-black/50 flex justify-center items-center'>
  <motion.form
    onSubmit={onSubmitHandler}
    initial={{ opacity: 0.2, y: 50 }}
    transition={{ duration: 0.3 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='relative bg-zinc-900/80 border border-zinc-700 backdrop-blur-xl p-10 rounded-xl text-gray-300 shadow-2xl w-full max-w-md'
  >
    <h1 className='text-center text-2xl font-semibold text-white mb-1'>{state}</h1>
    <p className='text-sm text-gray-400 mb-5'>Welcome! Sign in to continue</p>

    {state !== 'Login' && (
      <div className='bg-zinc-800/70 border border-zinc-700 px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
        <img className='w-5 h-5' src={assets.profile_icon} />
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          type='text'
          className='bg-transparent outline-none text-sm text-white w-full placeholder:text-gray-400'
          placeholder='Full Name'
          required
        />
      </div>
    )}

    <div className='bg-zinc-800/70 border border-zinc-700 px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
      <img className='w-5 h-5' src={assets.email_icon} />
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type='email'
        className='bg-transparent outline-none text-sm text-white w-full placeholder:text-gray-400'
        placeholder='Email id'
        required
      />
    </div>

    <div className='bg-zinc-800/70 border border-zinc-700 px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
      <img className='w-5 h-5' src={assets.lock_icon} />
      <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type='password'
        className='bg-transparent outline-none text-sm text-white w-full placeholder:text-gray-400'
        placeholder='Password'
        required
      />
    </div>

    <p className='text-sm text-blue-400 my-4 cursor-pointer hover:underline'>Forgot Password?</p>

    <button className='bg-blue-600 hover:bg-blue-700 transition-colors w-full text-white py-2 rounded-full font-medium'>
      {state === 'Login' ? 'Login' : 'Create Account'}
    </button>

    {state === 'Login' ? (
      <p className='mt-5 text-center text-sm'>
        Don&apos;t have an account?{' '}
        <span className='text-blue-400 hover:underline cursor-pointer' onClick={() => setState('Sign Up')}>
          Sign up
        </span>
      </p>
    ) : (
      <p className='mt-5 text-center text-sm'>
        Already have an account?{' '}
        <span className='text-blue-400 hover:underline cursor-pointer' onClick={() => setState('Login')}>
          Login
        </span>
      </p>
    )}

    <img
      onClick={() => setShowLogin(false)}
      src={assets.cross_icon}
      alt=''
      className='absolute top-5 right-5 cursor-pointer w-5 invert'
    />
  </motion.form>
</div>

  )
}

export default Login