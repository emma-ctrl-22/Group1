import React from 'react'

export default function Services() {
  return (
    <div className='w-full h-full flex flex-col'>
     <div className="flex flex-col">
        <small>Services</small>
        <h1>Group1 Hotel</h1>
      </div>
       <div className='flex flex-row w-full h-[90%] py-2 justify-between items-center'>
        <div className='bg-white w-[48%] h-full p-3'>
        <h1 className='font-bold text-lg'>All Services</h1>
        </div>
        <div className='bg-white w-[48%] h-full p-3'>
          <h1 className='font-bold text-lg'>Add New Service</h1>
        </div>
       </div> 
    </div>
  )
}
