import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'


function Captainlogin() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [captainData,setCaptainData] = useState({})

  const navigate = useNavigate();
  const {captain,setCaptain} = useContext(CaptainDataContext)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(email,password)
    const loggedInCaptain = {
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/login`,loggedInCaptain)
    
    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captainhome')
    }

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