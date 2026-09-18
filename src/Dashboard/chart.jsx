import React, { useState } from "react"
import { AreaChart } from "@tremor/react"

const chartdata = [
  { date: "Jan 23", "2024": 45, "2025": 78 },
  { date: "Feb 23", "2024": 52, "2025": 71 },
  { date: "Mar 23", "2024": 48, "2025": 80 },
  { date: "Apr 23", "2024": 61, "2025": 65 },
  { date: "May 23", "2024": 55, "2025": 58 },
  { date: "Jun 23", "2024": 67, "2025": 62 },
  { date: "Jul 23", "2024": 60, "2025": 54 },
  { date: "Aug 23", "2024": 72, "2025": 49 },
  { date: "Sep 23", "2024": 65, "2025": 52 },
  { date: "Oct 23", "2024": 68, "2025": 59 },
  { date: "Nov 23", "2024": 74, "2025": null },
  { date: "Dec 23", "2024": 71, "2025": null },
]

export const Area = () => {
  const [value, setValue] = useState(null)

  return (
    <div className="w-full">
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        categories={["2024", "2025"]}
        colors={["slate", "blue"]}
        yAxisWidth={30}
        onValueChange={(v) => setValue(v)}
      />
    </div>
  )
}

export default Area