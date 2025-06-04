import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Events from './Events'
import Members from './Members'

function App() {
  return (
    <div>
      {/* <routes>
        <route path="/" element={<Home />}></route>
      </routes> */}


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/index.html" element={<Home/>}></Route>
        <Route path="/events.html" element={<Events/>}></Route>
        <Route path="/members.html" element={<Members/>}></Route>
        <Route path="/about.html" element={<About/>}></Route>

      </Routes>


    </div>
  )
}

export default App
