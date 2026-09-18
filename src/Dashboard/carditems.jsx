import React from 'react'
import {BadgeDelta, Card, Flex, Text, Metric } from '@tremor/react'

const Carditems = () => {
  return (
    <Card className="max-w-full bg-white rounded-lg" decoration="top" decorationColor="indigo">
     <Flex justifyContent='between' alignItems='center'>
      <Text>Sales</Text>
      <BadgeDelta deltaType='moderateIncrease' className='!bg-green-700 !text-white rounded-lg'>+19.5%</BadgeDelta>
     </Flex>
      <Metric>$ 62,749</Metric>
    </Card>
  )
}

export default Carditems