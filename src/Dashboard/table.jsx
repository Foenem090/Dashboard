import React from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  TableFoot,
  Badge,
} from '@tremor/react'

const data = [
  {
    id: 1,
    name: "Peter McCrown",
    sales: "1,000,000",
    region: "Region A",
    status: "overperforming",
    hours: 100,
  },
  {
    id: 2,
    name: "Jon Mueller",
    sales: "2,202,000",
    region: "Region B",
    status: "overperforming",
    hours: 110,
  },
  {
    id: 3,
    name: "Peter Federer",
    sales: "1,505,000",
    region: "Region C",
    status: "underperforming",
    hours: 90,
  },
  {
    id: 4,
    name: "Maxime Bujet",
    sales: "500,000",
    region: "Region D",
    status: "overperforming",
    hours: 92,
  },
  {
    id: 5,
    name: "Emma Nelly",
    sales: "600,000",
    region: "Region E",
    status: "underperforming",
    hours: 95,
  },
]

 function TableHero() {
  return (
    <div className="w-full bg-slate-900 p-6 rounded-xl border border-slate-800">
      <Table>
        <TableHead>
          <TableRow className="border-b border-slate-800">
            <TableHeaderCell className="text-slate-400">Name</TableHeaderCell>
            <TableHeaderCell className="text-right text-slate-400">Sales ($)</TableHeaderCell>
            <TableHeaderCell className="text-slate-400">Region</TableHeaderCell>
            <TableHeaderCell className="text-slate-400">Status</TableHeaderCell>
            <TableHeaderCell className="text-right text-slate-400">Working Hours (h)</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="border-b border-slate-800/50">
              <TableCell className="font-medium text-white">{item.name}</TableCell>
              <TableCell className="text-right text-slate-300">{item.sales}</TableCell>
              <TableCell className="text-slate-300">{item.region}</TableCell>
              <TableCell>
                <Badge color={item.status === 'overperforming' ? 'emerald' : 'rose'}
                className="!text-white font-medium">
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-slate-300">{item.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFoot>
          <TableRow className="border-t border-slate-800 font-semibold text-white">
            <TableCell colSpan={2} className="text-right">
              Total Sales: 5,807,000
            </TableCell>
            <TableCell colSpan={3} className="text-right">
              Total Hours: 487
            </TableCell>
          </TableRow>
        </TableFoot>
      </Table>
    </div>
  )
}

export default TableHero



