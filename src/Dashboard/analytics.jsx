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
    icon: () => <FaTwitter className="w-4 h-4 text-sky-500 mr-2" />,
  },
  {
    name: 'Google',
    value: 351,
    icon: () => <FaGoogle className="w-4 h-4 text-slate-600 mr-2" />,
  },
  {
    name: 'GitHub',
    value: 271,
    icon: () => <FaGithub className="w-4 h-4 text-slate-800 mr-2" />,
  },
  {
    name: 'Reddit',
    value: 191,
    icon: () => <FaReddit className="w-4 h-4 text-orange-600 mr-2" />,
  },
  {
    name: 'Youtube',
    value: 91,
    icon: () => <FaYoutube className="w-4 h-4 text-red-600 mr-2" />,
  },
]

function Analytics() {
  return (
    <Card className=" mx-auto rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
      <Title className="text-slate-900 font-bold text-lg">Website Analytics</Title>

      {/* Table-style Headers */}
      <Flex className="mt-4 text-xs font-semibold text-slate-500">
        <Text className="text-xs font-semibold text-slate-500">Source</Text>
        <Text className="text-xs font-semibold text-slate-500">Visits</Text>
      </Flex>

      {/* Tremor BarList Component */}
      <BarList 
        data={analyticsData} 
        className="mt-2" 
        color="green"
        valueFormatter={(number) => Intl.NumberFormat('us').format(number)}
      />
    </Card>
  )
}

export default Analytics