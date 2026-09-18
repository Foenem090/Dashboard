import React from 'react'
import { Card, Title, Text, BarList, Flex, Badge } from '@tremor/react'
import { 
  FaTwitter, 
  FaGoogle, 
  FaGithub, 
  FaReddit, 
  FaYoutube 
} from 'react-icons/fa'

const analyticsData = [
  {
    name: (
      <span className="flex items-center gap-2">
        <FaTwitter className="w-4 h-4 text-sky-400 shrink-0" />
        <span>Twitter</span>
      </span>
    ),
    value: 456,
    color: '#38bdf8',
    share: '33%'
  },
  {
    name: (
      <span className="flex items-center gap-2">
        <FaGoogle className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Google</span>
      </span>
    ),
    value: 351,
    color: '#34d399',
    share: '26%'
  },
  {
    name: (
      <span className="flex items-center gap-2">
        <FaGithub className="w-4 h-4 text-violet-400 shrink-0" />
        <span>GitHub</span>
      </span>
    ),
    value: 271,
    color: '#a78bfa',
    share: '20%'
  },
  {
    name: (
      <span className="flex items-center gap-2">
        <FaReddit className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Reddit</span>
      </span>
    ),
    value: 191,
    color: '#fbbf24',
    share: '14%'
  },
  {
    name: (
      <span className="flex items-center gap-2">
        <FaYoutube className="w-4 h-4 text-rose-400 shrink-0" />
        <span>Youtube</span>
      </span>
    ),
    value: 91,
    color: '#fb7185',
    share: '7%'
  },
]

function Analytics() {
  return (
    <Card className="mx-auto rounded-xl text-lg bg-slate-800/90 p-6 border border-slate-700/80 shadow-md">
      <Flex justifyContent="between" alignItems="center">
        <Title className="text-white font-bold text-lg">Website Analytics</Title>

        {/* Highest tier indicator */}
        <Badge className="!bg-indigo-500/20 !text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          Top: Twitter
        </Badge>
      </Flex>

      {/* Table-style Headers */}
      <Flex className="mt-5 text-xs font-semibold text-slate-400 border-b border-slate-700/60 pb-2">
        <Text className="text-xs font-semibold text-slate-400">Source Platform</Text>
        <Text className="text-xs font-semibold text-slate-400">Visits (% Share)</Text>
      </Flex>

      {/* Tremor BarList Component */}
      <BarList 
        data={analyticsData} 
        className="mt-3 text-slate-200" 
        valueFormatter={(number) => {
          const item = analyticsData.find(d => d.value === number)
          return `${Intl.NumberFormat('us').format(number)} (${item?.share || ''})`
        }}
      />
    </Card>
  )
}

export default Analytics