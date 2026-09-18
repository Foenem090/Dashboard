import React, { useState } from 'react'
import { Card, Flex, Title, List, Text, Metric, TabGroup, TabList, Tab, Divider, Bold, Button, TabPanels, TabPanel, BadgeDelta, AreaChart, DonutChart, ListItem } from '@tremor/react'
import { ArrowRightIcon, ChartBarIcon, ListBulletIcon } from '@heroicons/react/24/outline'

const holdings = [
  { name: 'Off Running AG', value: 10456, change: '+ 6.1%', deltaType: 'moderateIncrease' },
  { name: 'Not Normal Inc.', value: 5789, change: '1.2%', deltaType: 'moderateDecrease' },
  { name: 'Logibling Inc.', value: 4367, change: '+ 2.3%', deltaType: 'moderateIncrease' },
  { name: 'Raindrop Inc.', value: 3421, change: '0.5%', deltaType: 'moderateDecrease' },
  { name: 'Mwatch Group', value: 1432, change: '3.4%', deltaType: 'moderateDecrease' },
]

const dataFormatter = (number) => {
    return "$" + Intl.NumberFormat('us').format(number).toString()

}

function Sales() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
    {/* outermost div */}
    <Card className='rounded-lg max-w-full mx-auto bg-white'>
        {/* header */}
        <Flex className='space-x-8 flex-col lg:flex-row gap-25'>
            <div className="bg-blue-900 px-3 py-1 rounded-lg border border-slate-200 inline-block">
                <Title className="font-bold text-white text-2xl">
                    Overview
                </Title>
            </div>

            {/* tabs */}
            <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>

                {/* tablist */}
                <TabList variant='solid'>

                    {/* tab */}
                    <Tab 
                        icon={ChartBarIcon} 
                        className="rounded-lg text-black flex items-center font-medium data-[selected]:bg-blue-900 data-[selected]:text-white hover:text-slate-900 transition-all cursor-pointer">
                        Chart
                    </Tab>
                    <Tab 
                        icon={ListBulletIcon} 
                        className="rounded-lg text-black flex items-center font-medium data-[selected]:bg-blue-900 data-[selected]:text-white hover:text-slate-900 transition-all cursor-pointer">
                        List
                    </Tab>
                </TabList>
            </TabGroup>
        </Flex>

        {/* textarea */}
            <Text className='mt-8'>Holdings</Text>
            <Metric>$54,677</Metric>
            <Divider></Divider>

            {/* asset */}
            <Text>
                <Bold>Asset Allocation</Bold>
            </Text>
            <Text>1 Asset class - 5 Holdings</Text>

            {/* selectd ind */}
            {selectedIndex === 0 ? (
              <DonutChart 
                className='mt-8'
                data={holdings} 
                category="value" 
                index="name" 
                valueFormatter={dataFormatter} 
              />
            ) : (
           <>
           {/* flexed header */}
           <Flex className='mt-8' justifyContent='between'>
            <Text className='truncate'>
                <Bold>Holdings</Bold>
            </Text>
            <Text>Since Transaction</Text>
           </Flex>

           {/* list */}
          <List className="mt-4">
            {holdings.map((holding) => (
                <ListItem key={holding.name}>
                    <Text>{holding.name}</Text>

                    {/* value */}
                    <Flex className='space-x-2' justifyContent='end'>
                        <Text>
                            $ {Intl.NumberFormat('us').format(holding.value).toString()}
                        </Text>
                    </Flex>
                </ListItem>
            ))}
            </List>
           </>)}

           {/* button */}
           <Flex className='mt-6 pt-4 border-t'>
            <Button size='xs'
             variant='light' 
             className='text-blue-800'
             icon={ArrowRightIcon}
             iconPosition='right'>
                View more
            </Button>
           </Flex>
    </Card>
    </>
  )
}

export default Sales