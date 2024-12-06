import React, { useContext } from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CaptainSignup() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain, setCaptain } = useContext(CaptainDataContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email,
      password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/captains/register`,captainData)
    console.log(response.data)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.data)
      localStorage.setItem('token',data.token)
      navigate('/captainhome')
    }



    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-[6rem] mb-8' src={logo} alt='logo' />
        <form onSubmit={handleSubmit}>

          <h3 className='text-lg font-medium mb-2'>What's our Captain's Name</h3>
          <div className='flex gap-3 mb-3'>
            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type='text' required placeholder='First name' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />

            <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base' type='text' required placeholder='Last name' value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
          </div>
          
          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
          <input className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base mb-3' type='email' required placeholder='email@example.com' value={email} onChange={(e) => { setEmail(e.target.value) }} />

          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base mb-3' type='password' required placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-3'>
            <input className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base mb-3' type='text' required placeholder='Vehicle Color' value={vehicleColor} onChange={(e) => { setVehicleColor(e.target.value) }} />

            <input className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base mb-3' type='text' required placeholder='Vehicle Plate' value={vehiclePlate} onChange={(e) => { setVehiclePlate(e.target.value) }} />
          </div>

          <div className="flex gap-4 mb-3">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base mb-3"
              type="number"
              required
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              min={1}
              max={4}
            />
            <select
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base mb-3"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="motorcycle">motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className='bg-[#111]  text-white font-semibold rounded px-4 py-2 w-full text-base placeholder:text-base mb-3'>Create Captain Account</button>

        </form>
        <p className='text-center'>Already Registered ? <Link to={'/captainlogin'} className='text-blue-600'>Login Here</Link></p>
      </div>
      <div className='text-[11px] leading-tight'>
        <p >By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Rideon. </p>
      </div>
    </div>
  )
}

export default CaptainSignup