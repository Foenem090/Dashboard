import React from 'react'
import Carditems from './carditems'
import  Area  from './chart'
import TableHero from './table'

const Left = () => {
  return (
    <>
    {/* outermost div */}
    <div className='w-full flex flex-col justify-between p-2'>
        {/* cards */}
        <div className='flex flex-col lg:flex-row gap-2 w-full sm:w-[800px]'>
          <Carditems/>
          <Carditems/>
          <Carditems/>
        </div>
        {/* chart */}
        <div className='flex-auto w-full mt-8 bg-white rounded-lg pb-4 '>
            <Area/>
        </div>
        {/* table */}
        <div className='flex-auto w-full rounded-lg mt-8'>
            <TableHero/>
        </div>
    </div>
    </>
  )
}

export default Left