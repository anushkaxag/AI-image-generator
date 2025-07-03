import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-6 mt-20 border-t border-gray-700'>
  <img alt='logo' width={150} className='opacity-90' />

  <p className='flex-1 border-l border-gray-600 pl-6 text-sm text-gray-400 max-sm:hidden'>
    © {new Date().getFullYear()} AI-image-generator · All rights reserved.
  </p>

  <div className='flex gap-4'>
    <img
      src={assets.facebook_icon}
      alt='Facebook'
      width={28}
      className='hover:scale-110 transition-all duration-300 cursor-pointer opacity-90'
    />
    <img
      src={assets.twitter_icon}
      alt='Twitter'
      width={28}
      className='hover:scale-110 transition-all duration-300 cursor-pointer opacity-90'
    />
    <img
      src={assets.instagram_icon}
      alt='Instagram'
      width={28}
      className='hover:scale-110 transition-all duration-300 cursor-pointer opacity-90'
    />
  </div>
</div>

  )
}

export default Footer