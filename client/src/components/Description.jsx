import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div
  initial={{ opacity: 0.2, y: 100 }}
  transition={{ duration: 1 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className='flex flex-col items-center justify-center my-24 px-6 md:px-28 bg-gradient-to-b from-[#0f0f10] to-[#121214] text-white'
>
  {/* Heading */}
  <motion.h1
    className='text-4xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Create Stunning AI Images
  </motion.h1>

  {/* Subtitle */}
  <motion.p
    className='text-neutral-400 text-lg mb-10 text-center max-w-2xl'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
  >
    Turn your imagination into visuals with just a prompt.
  </motion.p>

  {/* Image & Description */}
  <div className='flex flex-col gap-10 md:gap-16 md:flex-row items-center'>
    {/* Image */}
    <motion.img
      src={assets.sample_img_1}
      alt='Sample AI Image'
      className='w-80 xl:w-96 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300'
      whileHover={{ scale: 1.05 }}
    />

    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
    >
      <h2 className='text-3xl font-semibold mb-4 max-w-lg leading-snug'>
        Introducing the <span className='text-indigo-500'>AI-Powered</span> Text to Image Generator
      </h2>

      <p className='text-neutral-400 mb-4 leading-relaxed'>
        Elevate your creativity with our cutting-edge AI tool. Whether you're designing, ideating, or experimenting — get visually stunning results in seconds.
      </p>

      <p className='text-neutral-500 leading-relaxed'>
        Simply describe what you want, and let our generator create detailed, photorealistic, or artistic images — all with the magic of AI.
      </p>
    </motion.div>
  </div>
</motion.div>

  )
}

export default Description
