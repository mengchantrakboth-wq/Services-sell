import React from 'react'
import Navbar_header from './assets/components/Navbar_header'
import Hero from './assets/components/Hero'
import ButtonBar from './assets/components/ButtonBar'
 

function App() {
  return (
    <div>      
        <header>
          <Navbar_header/>
          
          
        </header>
        <main>
          {/* <Hero/> */}
          <ButtonBar/>
        </main>
       
      
    </div>
  )
}

export default App
