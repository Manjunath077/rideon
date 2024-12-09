import React from 'react'
import car from '../assets/car.png'
import auto from '../assets/auto.png'
import bike from '../assets/bike.png'

function VehiclePanel({setVehiclePanel,setConfirmRidePanel}) {
    return (
        <>
            <h5 className='pb-3 text-center absolute top-0 left-[45%] ' onClick={() => { setVehiclePanel(false) }}><i className="text-2xl ri-arrow-down-s-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={()=>{setConfirmRidePanel(true),setVehiclePanel(false)}} className='flex border-2 active:border-black bg-gray-100 mb-3 rounded-xl items-center w-full p-3 justify-between'>
                <img className=' h-[2.9rem]' src={car} alt='car logo' />
                <div className='w-1/2'>
                    <h4 className='font-medium text-sm'>Rideon Car <span><i className="ri-user-3-fill"></i> 4</span></h4>
                    <h5 className='font-medium text-base'>2 mins away</h5>
                    <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹ 193.20</h2>
            </div>
            <div onClick={()=>{setConfirmRidePanel(true), setVehiclePanel(false)}} className='flex border-2 active:border-black bg-gray-100 mb-3 rounded-xl items-center w-full p-3 justify-between'>
                <img className=' h-[3.5rem] mr-2' src={auto} alt='auto logo' />
                <div className='w-1/2'>
                    <h4 className='font-medium text-sm'>Auto <span><i className="ri-user-3-fill"></i> 3</span></h4>
                    <h5 className='font-medium text-base'>3 mins away</h5>
                    <p className='font-medium text-xs text-gray-600'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹ 118.86</h2>
            </div>
            <div onClick={()=>{setConfirmRidePanel(true), setVehiclePanel(false)}} className='flex border-2 active:border-black bg-gray-100 mb-3 rounded-xl items-center w-full p-3 justify-between'>
                <img className=' h-[3.2rem]' src={bike} alt='bike logo' />
                <div className='w-1/2'>
                    <h4 className='font-medium text-sm'>Bike <span><i className="ri-user-3-fill"></i> 1</span></h4>
                    <h5 className='font-medium text-base'>3 mins away</h5>
                    <p className='font-medium text-xs text-gray-600'>Affordable, Bike rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹ 65</h2>
            </div>
        </>
    )
}

export default VehiclePanel