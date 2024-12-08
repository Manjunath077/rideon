import React, { useRef, useState } from 'react'
import home from '../assets/home.png'
import logo from '../assets/logo.png'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import car from '../assets/car.png'
import auto from '../assets/auto.png'
import bike from '../assets/bike.png'

function Home() {
  const [pickup,setPickup] = useState('')
  const [destination,setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel,setVehiclePanel] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)


  const submitHandler = (e)=>{
    e.preventDefault();

  }
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: '70%',
        padding:30
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height: '0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={logo} alt='logo' />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src={home} alt='homescreen' />
      </div>

      <div className='flex flex-col justify-end absolute h-screen top-0 w-full '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute opacity-0 top-3 left-3 text-xl'>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-2xl mt-5 font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <input className='bg-[#eeeeee] w-full mt-4 px-12 py-2 text-base rounded-lg' type='text' placeholder='Add a pick-up location'  value={pickup} onChange={(e)=>{setPickup(e.target.value)}}
            onClick={()=>{
              setPanelOpen(true)
            }}
            />
            <input className='bg-[#eeeeee] w-full mt-3 px-12 py-2 text-base rounded-lg' type='text' placeholder='Enter your destination' value={destination} onChange={(e)=>{setDestination(e.target.value)}} 
            onClick={()=>{
              setPanelOpen(true)
            }}
            />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      {/* vehicle Display part  */}
      <div ref={vehiclePanelRef} className='fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-8'>
        <h5 className='pb-3 text-center absolute top-0 left-[45%] ' onClick={()=>{setVehiclePanel(false)}}><i className="text-2xl ri-arrow-down-s-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div className='flex border-2 active:border-black bg-gray-100 mb-3 rounded-xl items-center w-full p-3 justify-between'>
          <img  className=' h-[2.9rem]' src={car} alt='car logo'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Rideon Car <span><i className="ri-user-3-fill"></i> 4</span></h4>
            <h5 className='font-medium text-base'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹ 193.20</h2>
        </div>
        <div className='flex border-2 active:border-black bg-gray-100 mb-3 rounded-xl items-center w-full p-3 justify-between'>
          <img  className=' h-[3.5rem] mr-2' src={auto} alt='auto logo'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Auto <span><i className="ri-user-3-fill"></i> 3</span></h4>
            <h5 className='font-medium text-base'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ 118.86</h2>
        </div>
        <div className='flex border-2 active:border-black bg-gray-100 mb-3 rounded-xl items-center w-full p-3 justify-between'>
          <img  className=' h-[3.2rem]' src={bike} alt='bike logo'/>
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Bike <span><i className="ri-user-3-fill"></i> 1</span></h4>
            <h5 className='font-medium text-base'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, Bike rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ 65</h2>
        </div>
      </div>
    </div>
  )
}

export default Home