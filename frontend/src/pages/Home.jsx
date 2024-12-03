import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1548755562-d2c53dde888c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-[6rem] ml-8' src={logo} alt='logo'/>
        <div className='bg-white py-4 pb-5 px-4'>
          <h2 className='text-2xl font-bold'>Get Started with Rideon</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home