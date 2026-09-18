import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <>
    {/* outermost div */}
    <div id='top' className='relative w-full sm:flex justify-between items-center gap-[200px] p-2'>
        {/* header */}
        <h2 className='font-bold text-gray-300 text-2xl'>Dashboard</h2>

        {/* input */}
    <div className="relative w-full flex sm:justify-end">
        <div className="relative w-full sm:w-[300px] py-2">
            {/* search Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
            </div>

            {/* Input element */}
            <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-700 text-black rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Navbar