import React from 'react'
import Link from 'next/link'

function nev() {
  return (
    <div className='h-auto w-screen bg-black flex items-center justify-between p-4 relative'>
        <h1 className='text-4xl capitalize font-bold text-white hover:text-red-600'>imran khan</h1>
        <div className="text-2xl capitalize font-bold flex gap-10 text-red-600 ">
            <Link className='hover:text-white hover:text-4xl ' href="/">home</Link>
            <Link className='hover:text-white hover:text-4xl' href="./biography">biography</Link>
            <Link className='hover:text-white hover:text-4xl' href="./politics">politics</Link>
            <Link className='hover:text-white hover:text-4xl' href="./cricket">cricket</Link>
            <Link className='hover:text-white hover:text-4xl' href="./social">social work</Link>
        </div>
    </div>
  )
}

export default nev