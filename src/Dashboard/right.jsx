import React from 'react'
import Sales from './sales'
import Analytics from './analytics'
import TabsExample from './tab'

const Right = () => {
  return (
    <>
    {/* outermost div */}
    <div className='w-full flex flex-col gap-6 p-2'>
      <div className='w-full'>
        <Sales/>
      </div>

      <div className='w-full'>
        <Analytics/>
      </div>

      <div className='w-full'>
        <TabsExample/>
      </div>
    </div>
    </>
  )
}

export default Right