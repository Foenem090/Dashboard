import React from 'react'
import { BadgeDelta, Card, Flex, Text, Metric } from '@tremor/react'

const Carditems = () => {
  return (
    <Card className="max-w-full bg-slate-800/90 border-slate-700/80 rounded-xl shadow-md" decoration="top" decorationColor="indigo">
     <Flex justifyContent='between' alignItems='center'>
      <Text className="text-slate-300 font-medium">Sales</Text>
      <BadgeDelta deltaType='moderateIncrease' className='!bg-emerald-600/90 !text-white rounded-lg px-2.5 py-1 text-xs font-semibold'>+19.5%</BadgeDelta>
     </Flex>
      <Metric className="text-white font-bold text-2xl mt-2">$ 62,749</Metric>
    </Card>
  )
}

export default Carditems