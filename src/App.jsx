import Sidebar from "./Dashboard/Sidebar"
import Navbar from "./Dashboard/navbar"
import Left from "./Dashboard/left"
import Right from "./Dashboard/right"

function App() {
  return (
    <main className="flex min-h-screen w-full bg-slate-900 text-white overflow-x-hidden">
      {/* Fixed position sidebar */}
      <Sidebar /> 

      {/* Main dashboard content offset by sidebar width */}
      <div className="flex flex-col flex-1 min-w-0 ml-16 sm:ml-20 p-2 sm:p-4 space-y-4">
        <Navbar /> 

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <div className="lg:col-span-2 w-full"><Left /></div>
          <div className="w-full"><Right /></div>
        </div>
      </div>
    </main>
  )
}

export default App