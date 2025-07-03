import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

const ResultPage = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const { generateImage } = useContext(AppContext)

  const onSumbitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (input) {
      const image = await generateImage(input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    }

    setLoading(false)
  }

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSumbitHandler}
      className='flex flex-col min-h-[90vh] justify-center items-center text-white'
    >
      <div>
        <div className='relative border border-zinc-800 rounded-lg p-2 shadow-lg'>
          <img src={image} alt='' className='max-w-sm rounded-lg' />
          {loading && (
            <span className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full animate-pulse rounded-b-lg' />
          )}
        </div>
        {loading && <p className='mt-4 text-sm text-neutral-400'>Generating your image...</p>}
      </div>

      {!isImageLoaded && (
        <div className='flex w-full max-w-xl bg-zinc-800 text-white text-sm p-1 mt-10 rounded-full shadow-inner'>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type='text'
            placeholder='Describe what you want to generate...'
            className='flex-1 bg-transparent outline-none ml-6 placeholder-gray-400'
          />
          <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 transition-all px-10 sm:px-16 py-3 rounded-full font-medium'
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className='flex gap-4 flex-wrap justify-center text-sm p-1 mt-10'>
          <button
            type='button'
            onClick={() => {
              setIsImageLoaded(false)
              setInput('')
            }}
            className='bg-transparent border border-gray-500 text-white hover:bg-zinc-800 px-8 py-3 rounded-full transition-all'
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className='bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full transition-all'
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  )
}

export default ResultPage
