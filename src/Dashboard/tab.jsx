import React, { useState, useEffect } from "react"
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react"

const tabData = [
  [
    "You have 60 days from the time we've shipped your order to return any part of it to us for a refund, provided it is still in its original, unused condition: we do not accept returns of used items.",
    "No return authorization (RMA) is required. If you are within the United States, a pre-paid shipping label will be generated. For direct returns, a flat fee of $10 is deducted from your return for shipping and processing costs."
  ],
  [
    "We ship worldwide via UPS Expedited. We offer flat rate shipping to customers in Canada ($30), the EU, Japan, and Singapore ($45–$65+), and Australia ($65). Note that most brokerage fees are included in the price of UPS Expedited shipping, with the exception of a possible $10 fee assessed in Canada only if prior arrangements to pay for duties and taxes are not made (see next question and answer).",
    "Outside of the United States, tariffs, duties, and taxes are the responsibility of the customer and are usually paid at time of delivery."
  ]
]

function useTypewriter(textArray, activeIndex) {
  const [typedParagraphs, setTypedParagraphs] = useState(["", ""])

  useEffect(() => {
    setTypedParagraphs(["", ""])

    let pIndex = 0
    let charIndex = 0
    let currentP1 = ""
    let currentP2 = ""

    const interval = setInterval(() => {
      if (pIndex === 0) {
        if (charIndex < textArray[0].length) {
          currentP1 += textArray[0][charIndex]
          setTypedParagraphs([currentP1, ""])
          charIndex++
        } else {
          pIndex = 1
          charIndex = 0
        }
      } else if (pIndex === 1) {
        if (charIndex < textArray[1].length) {
          currentP2 += textArray[1][charIndex]
          setTypedParagraphs([currentP1, currentP2])
          charIndex++
        } else {
          clearInterval(interval)
        }
      }
    }, 20)

    return () => clearInterval(interval)
  }, [activeIndex])

  return typedParagraphs
}

export function TabsExample() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const typedContent = useTypewriter(tabData[selectedIndex], selectedIndex)

  return (
    /* Surface Elevation Container: Creates clear division from background */
    <div className="w-full max-w-full rounded-xl bg-slate-800/90 border border-slate-700/80 p-4 sm:p-5 shadow-md backdrop-blur-sm">
      <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
        
        {/* Tab Bar Track with prominent contrasting pill */}
        <TabList 
          variant="solid" 
          className="bg-slate-900/80 p-1 rounded-lg border border-slate-700/60 flex w-full sm:w-auto"
        >
          <Tab className="flex-1 sm:flex-initial rounded-md text-sm sm:text-[15px] font-semibold px-4 py-1.5 text-slate-300 transition-all data-[selected]:bg-blue-600 data-[selected]:text-white data-[selected]:shadow-sm hover:text-white cursor-pointer">
            Returns
          </Tab>
          <Tab className="flex-1 sm:flex-initial rounded-md text-sm sm:text-[15px] font-semibold px-4 py-1.5 text-slate-300 transition-all data-[selected]:bg-blue-600 data-[selected]:text-white data-[selected]:shadow-md hover:text-white cursor-pointer">
            Shipping
          </Tab>
        </TabList>

        {/* Content Box */}
        <div className="mt-4 pt-4 border-t border-slate-700/60 min-h-[180px]">
          <TabPanels>
            <TabPanel className="space-y-3 text-lg md:text-sm leading-relaxed text-slate-200 font-normal">
              <p className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50 text-slate-200">{typedContent[0]}</p>
              {typedContent[1] && (
                <p className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50 text-slate-200">{typedContent[1]}</p>
              )}
            </TabPanel>
            <TabPanel className="space-y-3 text-lg md:text-sm leading-relaxed text-slate-200 font-normal">
              <p className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">{typedContent[0]}</p>
              {typedContent[1] && (
                <p className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">{typedContent[1]}</p>
              )}
            </TabPanel>
          </TabPanels>
        </div>

      </TabGroup>
    </div>
  )
}

export default TabsExample