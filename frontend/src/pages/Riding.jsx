import React from 'react'
import home from '../assets/home.png'
import car from '../assets/car.png'
import { Link } from 'react-router-dom'

function Riding() {
    return (
        <div className='h-screen'>
            <Link to={'/home'} className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-4-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src={home} alt='homescreen' />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-around'>
                    <img className='h-12' src={car} alt='car logo' />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Ram Kumar</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>KA 05 F 2365</h4>
                        <p className='text-sm text-gray-600'>Suzuki Swift</p>
                    </div>
                </div>
                <div className='flex gap-2 flex-col justify-between items-center'>

                    <div className='w-full mt-1'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-xl ri-map-pin-2-fill"></i>
                            <div >
                                <h3 className='text-lg font-medium'>465/10</h3>
                                <p className='text-sm -mt-1 text-gray-600'>K M Nagraj Sir's Home, Jayanagar 2nd Block, Bengaluru</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3  '>
                            <i className="text-xl ri-currency-fill"></i>
                            <div >
                                <h3 className='text-lg font-medium'>₹ 193.20</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash / UPI payment</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <button  className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make Payment</button>
            </div>
        </div>
    )
}

export default Riding