import Sidebar from "./Dashboard/Sidebar"
import Navbar from "./Dashboard/navbar"
import Left from "./Dashboard/left"
import Right from "./Dashboard/right"




function App(){

  return(
    <>
    <main className="flex">
    <Sidebar/> 
    <div className="flex flex-col flex-1 relative ml-14 sm:ml-20">
    <Navbar/> 
    <div className="grid md:grid-cols-3 grid-cols-1">
      <div className="col-span-2"><Left/></div>
      <div className="w-full"><Right/></div>
    </div>
    </div>
    </main>
    </>
  )
  
}
export default App