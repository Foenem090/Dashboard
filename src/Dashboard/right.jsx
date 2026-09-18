import React from 'react'
import Sales from './sales'
import Analytics from './analytics'
import TabsExample from './tab'

const Right = () => {
  return (
    <>
    {/* outermost div */}
    <div className='w-full p-2'>
      <Sales/>
    </div>

    <div className='w-full p-2'>
      <Analytics/>
    </div>

    <div className='w-full p-2'>
      <TabsExample/>
    </div>
    </>
  )
}

export default Right