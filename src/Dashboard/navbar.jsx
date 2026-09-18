import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <>
    {/* outermost div */}
    <div id='top' className='relative w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 p-4 mb-2'>
        {/* header */}
        <h2 className='font-bold text-white text-2xl sm:text-3xl tracking-tight'>Dashboard</h2>

        {/* input */}
    <div className="relative w-full sm:w-auto flex sm:justify-end">
        <div className="relative w-full sm:w-[300px]">
            {/* search Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-slate-400" />
            </div>

            {/* Input element */}
            <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-slate-800/80 border border-slate-700/80 text-slate-100 placeholder-slate-400 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
            />
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Navbar