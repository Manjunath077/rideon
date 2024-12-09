import React from 'react'
import car from '../assets/car.png'
// import auto from '../assets/auto.png'
// import bike from '../assets/bike.png'


function ConfirmRide({ setConfirmRidePanel, setVehicleFound }) {
  return (
    <div>
      <h5 className='pb-3 text-center absolute top-0 left-[45%] ' onClick={() => { setConfirmRidePanel(false) }}><i className="text-2xl ri-arrow-down-s-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>

      <div className='flex gap-4 flex-col justify-between items-center'>
        <img className='h-20' src={car} alt='car logo' />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-4 border-b-2'>
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div >
              <h3 className='text-lg font-medium'>465/10</h3>
              <p className='text-sm -mt-1 text-gray-600'>K M Nagraj Sir's Home, Jayanagar 2nd Block, Bengaluru</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-4 border-b-2'>
            <i className="text-xl ri-map-pin-2-fill"></i>
            <div >
              <h3 className='text-lg font-medium'>465/10</h3>
              <p className='text-sm -mt-1 text-gray-600'>K M Nagraj Sir's Home, Jayanagar 2nd Block, Bengaluru</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-4 '>
            <i className="text-xl ri-currency-fill"></i>
            <div >
              <h3 className='text-lg font-medium'>₹ 193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash / UPI payment</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => { setConfirmRidePanel(false), setVehicleFound(true) }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
    </div>
  )
}

export default ConfirmRide