import React from 'react'
import Header from './Components/Header/Header'
import Type from './Components/Type/Type'
import Body from './Components/Body/Body'
import Download from './Components/Cv/Download'
import Social from './Components/Social/Social'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
const TECHNOS = [
  {'name':'JS', 'type':'front'},
  {'name':'HTML', 'type':'front'},
  {'name':'css', 'type':'front'},
  {'name':'PHP', 'type':'back'},
  {'name':'Mysql', 'type':'back'},
  {'name':'Ajax', 'type':'back'},
  {'name':'Git', 'type':'others'},
]
function App() {  
  
  return <>
    <div className="container">
        <Header />
        <Type />
        <Body />
        <Download />
        <Social />
        <About />
        <Skills technos={TECHNOS}/>
    </div>
  </>
}




export default App
