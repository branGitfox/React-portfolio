import React from 'react'
import Header from './Components/Header/Header'
import Type from './Components/Type/Type'
import Body from './Components/Body/Body'
import Download from './Components/Cv/Download'
import Social from './Components/Social/Social'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

function App() {  

  return <>
    <div className="container">
        <Header />
        <Type />
        <Body />
        <Download />
        <Social />
        <About />
        <Skills />
    </div>
  </>
}




export default App
