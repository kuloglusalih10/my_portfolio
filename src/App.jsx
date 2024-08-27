import './copy.css'
import './test.css'
import './App.css'

import Hero from "./companents/Hero"
import About from "./companents/About"
import Navbar from "./companents/Navbar"

function App() {

  return (
    <div className='w-full h-full'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
