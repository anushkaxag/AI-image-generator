import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-32 text-white'
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How It Works?</h1>
      <p className='text-lg text-gray-400 mb-8'>Transforming Imaginations into Stunning Images</p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-4 p-5 px-8 bg-zinc-900/80 border border-zinc-800 rounded-lg shadow-xl backdrop-blur-md hover:scale-[1.02] transition-all duration-300'
          >
            <img width={40} src={item.icon} alt='' className='brightness-125' />
            <div>
              <h2 className='text-xl font-medium'>{item.title}</h2>
              <p className='text-gray-300'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
