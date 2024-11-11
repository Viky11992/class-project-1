import React from 'react'
import Image from 'next/image'
import myImage from '../../../public/images/young (2).png';
function hero() {
  return (
    <div className='h-screen w-screen pt-10 flex justify-around '>
      <div className='h-3/4 w-1/4  bg-white shadow-lg shadow-zinc-500/50  shadowx-grey-900 relative'>
      <Image
          src={myImage}
          alt="image"
          className=" bg-cover h-full w-full bg-center object-cover relative rounded  hover:p-4"
        />
 
      </div> 
      <div className='h-3/4 w-2/4  bg-zinc-950 shadow-lg shadow-zinc-500/50  shadowx-grey-900 relative'>
        <h1 className='text-7xl font-bold font-serif uppercase underline text-white hover:text-red-600'>imran khan</h1>
        <p className='text-white text-4xl capitalize font-sans hover:text-red-600'>chairman pakistan tehreek-e-insaf</p>
        <p className='p-2 capitalize text-3xl font-sens text-red-600 font-semibold hover:text-white'>A Leader Behind Bars, A Nation Behind Him:</p>
        <p className='text-white text-2xl capitalize hover:text-red-600'>Despite facing imprisonment and relentless political pressure, Imran Khan remains a towering figure in Pakistans political landscape. Jailed on controversial charges, Khans influence continues to rally millions of supporters, both at home and abroad. With his conviction labeled as arbitrary by international bodies, Khans defiant stance against the powerful military establishment keeps him at the center of Pakistans future. His vision for a better Pakistan lives on, as the call for his release grows louder by the day.</p>
      
      </div>

            
    </div>
  )
}

export default hero