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
    <div className="w-full bg-slate-800/90 p-4 sm:p-6 rounded-xl border border-slate-700/80 shadow-md overflow-x-auto">
      <Table className="w-full min-w-[600px]">
        <TableHead>
          <TableRow className="border-b border-slate-700/80">
            <TableHeaderCell className="text-slate-400 font-semibold">Name</TableHeaderCell>
            <TableHeaderCell className="text-right text-slate-400 font-semibold">Sales ($)</TableHeaderCell>
            <TableHeaderCell className="text-slate-400 font-semibold">Region</TableHeaderCell>
            <TableHeaderCell className="text-slate-400 font-semibold">Status</TableHeaderCell>
            <TableHeaderCell className="text-right text-slate-400 font-semibold">Working Hours (h)</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
              <TableCell className="font-semibold text-white">{item.name}</TableCell>
              <TableCell className="text-right text-slate-200">{item.sales}</TableCell>
              <TableCell className="text-slate-300">{item.region}</TableCell>
              <TableCell>
                <Badge 
                  className={`!text-white font-medium border-0 px-2.5 py-0.5 rounded-md ${
                    item.status === 'overperforming' 
                      ? '!bg-emerald-500' 
                      : '!bg-rose-500'
                  }`}
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-slate-200">{item.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFoot>
          <TableRow className="border-t border-slate-700 font-semibold text-white">
            <TableCell colSpan={2} className="text-right text-slate-200">
              Total Sales: 5,807,000
            </TableCell>
            <TableCell colSpan={3} className="text-right text-slate-200">
              Total Hours: 487
            </TableCell>
          </TableRow>
        </TableFoot>
      </Table>
    </div>
  )
}
export default TableHero