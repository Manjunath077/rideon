import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import home from '../assets/home.png'
import logo from '../assets/logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'


function Home() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound,setVehicleFound] = useState(false)
  const [waitingForDriver,setWaitingForDriver] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault();
  }

  // Location Panel GSAP
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 30
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])


  // Vehicle Panel GSAP
  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])


  // Ride Panel GSAP
  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  // loking for the driver GSAP
  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  // Waiting for the driver GSAP
  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={logo} alt='logo' />

      {/* Map Image Part */}
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src={home} alt='homescreen' />
      </div>

      {/* Selecting Location for the drive */}
      <div className='flex flex-col justify-end absolute h-screen top-0 w-full '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => { setPanelOpen(false) }} className='absolute opacity-0 top-3 left-3 text-xl'>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-2xl mt-5 font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <input className='bg-[#eeeeee] w-full mt-4 px-12 py-2 text-base rounded-lg' type='text' placeholder='Add a pick-up location' value={pickup} onChange={(e) => { setPickup(e.target.value) }}
              onClick={() => {
                setPanelOpen(true)
              }}
            />
            <input className='bg-[#eeeeee] w-full mt-3 px-12 py-2 text-base rounded-lg' type='text' placeholder='Enter your destination' value={destination} onChange={(e) => { setDestination(e.target.value) }}
              onClick={() => {
                setPanelOpen(true)
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      {/* vehicle Display part  */}
      <div ref={vehiclePanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      {/* Confirm Ride Part */}
      <div ref={confirmRidePanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8'>
        <ConfirmRide setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} setVehicleFound = {setVehicleFound}/>
      </div>

      {/* Vehicle Found Part */}
      <div ref={vehicleFoundRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      {/* Waiting for the Driver Part */}
      <div ref={waitingForDriverRef} className='fixed z-10 w-full bottom-0 translate-y-full pt-12 bg-white px-3 py-8'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>

    </div>
  )
}

export default Home