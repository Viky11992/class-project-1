import React from 'react'
import Image from 'next/image'
import Loading from '../../public/images/load.jpg'

export default function loading() {
  return (
    <div className='h-screen w-screen bg-zinc-900 flex items-center justify-center'>
      <Image src={Loading} alt='image' className='h-full w-full '/>


    </div>
  )
}
