import React from 'react'
import { Card, Title, Text, BarList, Flex } from '@tremor/react'
import { 
  FaTwitter, 
  FaGoogle, 
  FaGithub, 
  FaReddit, 
  FaYoutube 
} from 'react-icons/fa'

const analyticsData = [
  {
    name: 'Twitter',
    value: 456,
    icon: () => <FaTwitter className="w-4 h-4 text-sky-400 mr-2" />,
  },
  {
    name: 'Google',
    value: 351,
    icon: () => <FaGoogle className="w-4 h-4 text-slate-300 mr-2" />,
  },
  {
    name: 'GitHub',
    value: 271,
    icon: () => <FaGithub className="w-4 h-4 text-slate-200 mr-2" />,
  },
  {
    name: 'Reddit',
    value: 191,
    icon: () => <FaReddit className="w-4 h-4 text-orange-500 mr-2" />,
  },
  {
    name: 'Youtube',
    value: 91,
    icon: () => <FaYoutube className="w-4 h-4 text-red-500 mr-2" />,
  },
]

function Analytics() {
  return (
    <Card className="mx-auto rounded-xl bg-slate-800/90 p-6 border border-slate-700/80 shadow-md">
      <Title className="text-white font-bold text-lg">Website Analytics</Title>

      {/* Table-style Headers */}
      <Flex className="mt-4 text-xs font-semibold text-slate-400">
        <Text className="text-xs font-semibold text-slate-400">Source</Text>
        <Text className="text-xs font-semibold text-slate-400">Visits</Text>
      </Flex>

      {/* Tremor BarList Component */}
      <BarList 
        data={analyticsData} 
        className="mt-2 text-slate-200" 
        color="emerald"
        valueFormatter={(number) => Intl.NumberFormat('us').format(number)}
      />
    </Card>
  )
}

export default Analytics