import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"

import Tech from "./components/Tech"
import Works from "./components/Works"

import Contact from "./components/Contact"
import Stars from "./components/canvas/Stars"


function App() {


  return (
 <BrowserRouter>
  <div className="relative z-0 bg-primary">
  <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
<Navbar></Navbar>
<Hero></Hero>

  </div>
  <About></About>
  
  <Tech></Tech>
  <Works></Works>
  <div className="relative z-0">
  <Contact></Contact>
  <Stars></Stars>
  

  </div>

  </div>
 </BrowserRouter>
  )
}

export default App
