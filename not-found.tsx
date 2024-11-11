import React from 'react'
import Image from 'next/image'
import NotFound from '../../public/images/notfound.jpg'

function notFound() {
  return (
    <div className='h-screen w-screen bg-zinc-900 flex items-center justify-center'>
      <Image src={NotFound} alt='image' className='h-1/2 w-1/2 '/>


    </div>
  )
}

export default notFound