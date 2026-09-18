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
    <div className='bg-slate-800 flex flex-col items-center py-6 h-screen w-14 sm:w-20 fixed left-0 top-0 justify-between'>
      {/* Home icon at the top */}
      <div>
      <div className='mb-12'>
        <HomeIcon width={40} className='text-gray-300' />
      </div>

      {/* Other menu icons */}
      <div className='flex flex-col gap-4'>
        <ChartBarIcon width={40} className='text-gray-300 bg-gray-600 p-2 rounded-lg'/>
        <DocumentMagnifyingGlassIcon width={40} className='text-gray-300 bg-gray-600 p-2 rounded-lg'/>
        <EnvelopeIcon width={40} className='text-gray-300 bg-gray-600 p-2 rounded-lg'/>
        <CreditCardIcon width={40} className='text-gray-300 bg-gray-600 p-2 rounded-lg'/>
        <BellIcon width={40} className='text-gray-300 bg-gray-600 p-2 rounded-lg'/>
      </div>
      </div>

      {/* footer icons */}
      <div className='bottom-4 left-3 sm:left-6'>
        <a href="#top">
        <ArrowUpIcon width={40} className='text-gray-300 bg-gray-600 p-2 rounded-lg mb-4'/>
        </a>
        <ArrowTopRightOnSquareIcon width={40} className='text-gray-300 bg-gray-600 p-2 rounded-lg'/>
      </div>
    </div>
  )
}

export default Sidebar