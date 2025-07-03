import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-5 px-4 sm:px-10 bg-[#0e0e0e] text-white shadow-sm'>
  {/* Logo */}
  <Link to='/'>
    <img alt='logo' className='w-28 sm:w-32 lg:w-40' />
  </Link>

  {/* Right Side */}
  <div>
    {user ? (
      <div className='flex items-center gap-4'>
        {/* Credits Button */}
        <button
          onClick={() => navigate('/buy')}
          className='flex items-center gap-2 bg-indigo-700 hover:bg-indigo-600 px-5 py-2 rounded-full transition duration-300'
        >
          <img className='w-5' src={assets.credit_star} alt='credit icon' />
          <p className='text-sm font-medium'>Credits Left: {credit}</p>
        </button>

        {/* User Greeting */}
        <p className='text-gray-300 text-sm hidden sm:block'>Hi, {user.name}</p>

        {/* Profile Dropdown */}
        <div className='relative group'>
          <img
            src={assets.profile_icon}
            alt='profile'
            className='w-10 h-10 rounded-full border-2 border-indigo-700 cursor-pointer'
          />
          <div className='absolute hidden group-hover:block top-12 right-0 z-20'>
            <ul className='bg-neutral-900 border border-neutral-700 rounded-md text-sm text-white shadow-lg'>
              <li
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className='px-4 py-2 cursor-pointer hover:bg-neutral-800'
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    ) : (
      // Guest Mode
      <div className='flex items-center gap-4'>
        <p
          onClick={() => navigate('/buy')}
          className='text-gray-400 hover:text-white cursor-pointer text-sm transition duration-200'
        >
          Pricing
        </p>
        <button
          onClick={() => setShowLogin(true)}
          className='bg-gradient-to-r from-zinc-700 to-zinc-600 text-white px-7 py-2 rounded-full text-sm hover:scale-105 transition-all duration-300'
        >
          Login
        </button>
      </div>
    )}
  </div>
</div>

  )
}

export default Navbar
