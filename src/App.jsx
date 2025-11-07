import React from 'react'
import Navbar_header from './assets/components/Navbar_header'
import Hero from './assets/components/Hero'
import ButtonBar from './assets/components/ButtonBar'
import Card from './assets/components/Card'
import Client from './assets/components/Client'
 

function App() {
  return (
    <div>      
        <header>
          <Navbar_header/>
        </header>
        <main>
          <Hero/>
          <Card/>
          <Client/>
          <ButtonBar/>
        </main>
       
      
    </div>
  )
}

export default App
