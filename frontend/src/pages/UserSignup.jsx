import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function UserSignup() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email,
      password
    })
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    console.log(userData)
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-[6rem] mb-10' src={logo} alt='logo' />
        <form onSubmit={handleSubmit}>
          <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-3 mb-5'>
            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type='text' required placeholder='First name' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
            
            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type='text' required placeholder='Last name' value={lastname}   onChange={(e) => { setLastname(e.target.value) }} />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base mb-5' type='email' required placeholder='email@example.com' value={email} onChange={(e) => { setEmail(e.target.value) }} />

          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base mb-5' type='password' required placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

          <button className='bg-[#111]  text-white font-semibold rounded px-4 py-2 w-full text-base placeholder:text-base mb-3'>Create Account</button>

        </form>
        <p className='text-center'>Already Registered ? <Link to={'/login'} className='text-blue-600'>Login Here</Link></p>
      </div>
      <div>
        <p className='text-[11px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span></p>
      </div>
    </div>
  )
}

export default UserSignup