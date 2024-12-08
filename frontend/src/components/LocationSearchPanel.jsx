import React from 'react'

function LocationSearchPanel({setPanelOpen,setVehiclePanel}) {
    const locations = [
        "13/76, Manjunatha Nilaya, Shahapur-585223",
        "13/73, Ranganatha Nilaya, Shahapur-585223",
        "13/73, Rakshitha Nilaya, Shahapur-585223",
        "13/73, Mailaralingeshwara Nilaya, Shahapur-585223",
    ]
    return (
        <div>
            {locations.map((ele, index) => {
                return (
                    <div onClick={()=>{setVehiclePanel(true), setPanelOpen(false)}} key={index} className='flex items-center gap-4 active:border-black border-2 border-gray-50 px-3 py-2 rounded-xl my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 w-12 my-4 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{ele}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default LocationSearchPanel