import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import ResultPage from './pages/ResultPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const { showLogin } = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white font-sans'>
      <ToastContainer 
        position='bottom-right'
        theme='dark'
        toastClassName='bg-zinc-800 text-white'
      />

      <Navbar />
      {showLogin && <Login />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
