import React from 'react'
import Carditems from './carditems'
import Area from './chart'
import TableHero from './table'

const Left = () => {
  return (
    <>
    {/* outermost div */}
    <div className='w-full flex flex-col justify-between p-2 space-y-6'>
        {/* cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
          <Carditems/>
          <Carditems/>
          <Carditems/>
        </div>
        {/* chart */}
        <div className='w-full rounded-xl'>
            <Area/>
        </div>
        {/* table */}
        <div className='w-full rounded-xl'>
            <TableHero/>
        </div>
    </div>
    </>
  )
}

export default Left