import React from 'react'
import car from '../assets/car.png'

function WaitingForDriver({setWaitingForDriver}) {
    return (
        <div>
            <h5 className='pb-3 text-center absolute top-0 left-[45%] ' onClick={() => { setWaitingForDriver(false) }}><i className="text-2xl ri-arrow-down-s-line"></i></h5>
            <h1 className='text-2xl font-semibold mb-5 text-center'>Waiting for the driver</h1>

            <div className='flex items-center justify-around'>
                <img className='h-12' src={car} alt='car logo' />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Ram Kumar</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>KA 05 F 2365</h4>
                    <p className='text-sm text-gray-600'>Suzuki Swift</p>
                </div>
            </div>
            <div className='flex gap-4 flex-col justify-between items-center'>
                
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
        </div>
    )
}

export default WaitingForDriver