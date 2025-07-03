import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const BuyCredit = () => {
  const { user } = useContext(AppContext)

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-16 mb-14 bg-black text-white px-6'
    >
      {/* Plans Button */}
      <button className='border border-gray-600 text-neutral-300 px-10 py-2 rounded-full mb-6 hover:bg-neutral-800 transition duration-300'>
        Plans
      </button>

      {/* Title */}
      <h1 className='text-3xl sm:text-4xl font-semibold mb-10'>
        Choose the Plan
      </h1>

      {/* Plans */}
      <div className='flex flex-wrap justify-center gap-8 text-left'>
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className='bg-gradient-to-br from-neutral-900 to-zinc-800 border border-neutral-700 rounded-2xl py-10 px-8 text-neutral-300 hover:scale-105 transition-transform duration-500 shadow-xl max-w-xs w-full'
            whileHover={{ y: -5 }}
          >
            <img width={40} src={assets.lock_icon} alt='' className='mb-3' />
            <p className='text-lg font-semibold text-white'>{item.id}</p>
            <p className='text-sm text-gray-400'>{item.desc}</p>

            <p className='mt-6 text-white'>
              <span className='text-3xl font-bold text-indigo-400'>
                ${item.price}
              </span>{' '}
              <span className='text-sm text-neutral-400'>/ {item.credits} credits</span>
            </p>

            <button className='w-full mt-8 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 transition duration-300 text-white font-medium shadow-md'>
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
