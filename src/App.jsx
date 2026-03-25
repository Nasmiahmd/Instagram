import React from "react"
import SideBar from "./SideBar"
import Feed from "./Feed"
import Suggestions from "./Suggestions"

function App(){

  return(
    <>
      <div className="d-flex">
        <div className="w-15"><SideBar /></div>
        <div className="w-40"><Feed /></div>
        <div className="w-30"><Suggestions /></div>
      </div>
    </>
  )
}

export default App