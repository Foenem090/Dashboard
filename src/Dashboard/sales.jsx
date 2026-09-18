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
    <Card className='rounded-xl max-w-full mx-auto bg-slate-800/90 border border-slate-700/80 shadow-md'>
        {/* header */}
        <Flex className='space-x-8 flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center'>
            <div className="bg-blue-600/90 px-3 py-1 rounded-lg border border-blue-500/50 inline-block shadow-sm">
                <Title className="font-bold text-white text-xl">
                    Overview
                </Title>
            </div>

            {/* tabs */}
            <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>

                {/* tablist */}
                <TabList variant='solid' className="bg-slate-900/80 border border-slate-700/60 p-1 rounded-lg">

                    {/* tab */}
                    <Tab 
                        icon={ChartBarIcon} 
                        className="rounded-md text-slate-300 flex items-center font-medium data-[selected]:bg-blue-600 data-[selected]:text-white hover:text-white transition-all cursor-pointer">
                        Chart
                    </Tab>
                    <Tab 
                        icon={ListBulletIcon} 
                        className="rounded-md text-slate-300 flex items-center font-medium data-[selected]:bg-blue-600 data-[selected]:text-white hover:text-white transition-all cursor-pointer">
                        List
                    </Tab>
                </TabList>
            </TabGroup>
        </Flex>

        {/* textarea */}
            <Text className='mt-6 text-slate-400 font-medium'>Holdings</Text>
            <Metric className='text-white font-bold text-2xl mt-1'>$54,677</Metric>
            <Divider className='border-slate-700/60 my-4'></Divider>

            {/* asset */}
            <Text className='text-slate-200'>
                <Bold className='text-white'>Asset Allocation</Bold>
            </Text>
            <Text className='text-slate-400 text-sm mt-0.5'>1 Asset class - 5 Holdings</Text>

            {/* selectd ind */}
            {selectedIndex === 0 ? (
              <DonutChart 
                className='mt-6 h-52 text-white'
                data={holdings} 
                category="value" 
                index="name" 
                colors={["blue", "cyan", "indigo", "violet", "slate"]}
                valueFormatter={dataFormatter} 
              />
            ) : (
           <>
           {/* flexed header */}
           <Flex className='mt-6' justifyContent='between'>
            <Text className='truncate text-slate-300'>
                <Bold className='text-slate-200'>Holdings</Bold>
            </Text>
            <Text className='text-slate-400 text-sm'>Since Transaction</Text>
           </Flex>

           {/* list */}
          <List className="mt-2 divide-slate-700/50">
            {holdings.map((holding) => (
                <ListItem key={holding.name} className="border-slate-700/50 py-2">
                    <Text className="text-slate-300 font-medium">{holding.name}</Text>

                    {/* value */}
                    <Flex className='space-x-2' justifyContent='end'>
                        <Text className="text-slate-100 font-semibold">
                            $ {Intl.NumberFormat('us').format(holding.value).toString()}
                        </Text>
                    </Flex>
                </ListItem>
            ))}
            </List>
           </>)}

            {/* button */}
            <Flex className='mt-6 pt-3 border-t border-slate-700/60'>
            <Button size='xs'
             variant='light' 
             className='text-blue-400 hover:text-blue-300 p-0 font-medium transition-colors'
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