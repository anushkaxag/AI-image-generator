import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-20 py-12 text-white'
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
      <p className='text-gray-400 mb-12'>What Users say about Us</p>

      <div className='flex flex-wrap gap-6 justify-center'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl shadow-xl w-80 cursor-pointer hover:scale-[1.03] transition-transform duration-300'
          >
            <div className='flex flex-col items-center'>
              <img src={testimonial.image} alt='' className='rounded-full w-14 border-2 border-blue-500 shadow-md' />
              <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
              <p className='text-gray-400 mb-4 text-sm'>{testimonial.role}</p>
              <div className='flex mb-4'>
                {Array(testimonial.stars).fill().map((_, i) => (
                  <img key={i} src={assets.rating_star} alt='star' className='w-4 h-4' />
                ))}
              </div>
              <p className='text-center text-sm text-gray-300'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
