import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function Captainlogin() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [captainData,setCaptainData] = useState({})

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(email,password)
    setCaptainData({
      email:email,
      password:password
    })
    // console.log(captainData)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-[6rem] mb-10' src={logo} alt='logo' />
        <form onSubmit={handleSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' type='email' required placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7' type='password' required placeholder='password' />

          <button className='bg-[#111]  text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-3'>Login</button>

        </form>
        <p className='text-center'>join a fleet <Link to={'/captainsignup'} className='text-blue-600'>Register as a Captain</Link></p>
      </div>
      <div>
        <Link to={'/login'} className='bg-[#d5622d] flex items-center justify-center  text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-5'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default Captainlogin