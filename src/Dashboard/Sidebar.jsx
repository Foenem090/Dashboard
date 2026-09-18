import React from 'react'
import { 
  BellIcon, 
  ChartBarIcon, 
  HomeIcon, 
  EnvelopeIcon, 
  DocumentMagnifyingGlassIcon, 
  CreditCardIcon,
  ArrowTopRightOnSquareIcon, 
  ArrowUpIcon
} from '@heroicons/react/24/solid'

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 sm:w-20 bg-slate-900 border-r border-slate-800/80 flex flex-col items-center justify-between py-6 z-50">
      {/* Home icon at the top */}
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="mb-2">
          <a 
            href="#top" 
            className="text-slate-200 hover:text-white transition-colors p-2 rounded-xl hover:bg-slate-800 block"
          >
            <HomeIcon className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
        </div>

        {/* Other menu icons */}
        <div className="flex flex-col gap-3 w-full items-center px-2">
          <button className="text-slate-300 bg-slate-800/90 hover:bg-slate-700/80 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm">
            <ChartBarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="text-slate-300 bg-slate-800/90 hover:bg-slate-700/80 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm">
            <DocumentMagnifyingGlassIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="text-slate-300 bg-slate-800/90 hover:bg-slate-700/80 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm">
            <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="text-slate-300 bg-slate-800/90 hover:bg-slate-700/80 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm">
            <CreditCardIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="text-slate-300 bg-slate-800/90 hover:bg-slate-700/80 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm">
            <BellIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* footer icons */}
      <div className="flex flex-col gap-3 items-center px-2 w-full">
        <a 
          href="#top" 
          className="text-slate-300 bg-slate-800/90 hover:bg-slate-700/80 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm block"
        >
          <ArrowUpIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <button className="text-slate-300 bg-slate-800/90 hover:bg-slate-700/80 p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm">
          <ArrowTopRightOnSquareIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar