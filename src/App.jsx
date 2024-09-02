import './copy.css'
import './test.css'
import './App.css'

import Hero from "./companents/Hero"
import About from "./companents/About"
import Navbar from "./companents/Navbar"
import Experience from "./companents/Experience"
import Contact from "./companents/Contact"

function App() {

  return (
    <div className='w-full h-full'>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
