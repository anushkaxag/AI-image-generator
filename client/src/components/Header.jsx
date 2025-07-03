import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = () => {
        if(user){
            navigate('/result')
        }
        else{
            setShowLogin(true)
        }
    }

  return (
    <motion.div 
  className='flex flex-col justify-center items-center text-center my-20 bg-black text-white px-4 sm:px-10 transition-colors duration-500'
  initial={{ opacity: 0.2, y: 100 }}
  transition={{ duration: 1 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  {/* Badge */}
  <motion.div 
    className='text-sm font-medium text-amber-400 inline-flex items-center gap-2 bg-neutral-900 px-5 py-2 rounded-full border border-neutral-700 shadow-lg backdrop-blur'
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    <p>Best Text to Image Generator</p>
    <img src={assets.star_icon} alt='' className='h-4 w-4'/>
  </motion.div>

  {/* Heading */}
  <motion.h1 
    className='text-4xl max-w-[320px] sm:text-6xl sm:max-w-[680px] font-extrabold tracking-tight leading-tight mt-10'
  >
    Turn Text to <span className='text-indigo-500'>Image</span>, in Seconds
  </motion.h1>

  {/* Subheading */}
  <motion.p 
    className='text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mt-5'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    Unleash Creativity with AI. Let your imagination run wild.
  </motion.p>

  {/* Button */}
  <motion.button 
    onClick={onClickHandler}
    className='sm:text-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 mt-8 px-12 py-3 rounded-full inline-flex items-center gap-2 shadow-xl hover:brightness-110 active:scale-95 transition-all duration-300'
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
  >
    Generate Images ✨
    <img className='h-6' src={assets.star_group} alt='' />
  </motion.button>

  {/* Image Preview Row */}
  <motion.div 
    className='flex flex-wrap justify-center mt-16 gap-3'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
  >
    {Array(6).fill('').map((_, index) => (
      <motion.img 
        className='rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-[70px] shadow-md hover:shadow-purple-500/30'
        whileHover={{ scale: 1.05 }}
        src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
        alt='' 
        key={index}
      />
    ))}
  </motion.div>

  {/* Caption */}
  <motion.p 
    className='mt-3 text-neutral-500 text-sm'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  >
    Generated Images from AI Image Generator
  </motion.p>
</motion.div>

  )
}

export default Header