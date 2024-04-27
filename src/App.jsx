import React, { useEffect, useState } from 'react'
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
  const [filtre, setFiltre] = useState('All')
  const handle = (e) => {
    setFiltre(e.target.textContent)
  }

  const technos = TECHNOS.filter(filt => {
      // if(filtre === 'All'){
      //   return true
      // }

      if(filtre === 'Front-Ends' && filt.type!=='front'){
        return false
      }

      if(filtre === 'Back-Ends' && filt.type!=='back'){
        return false
      }

      if(filtre === 'Others' && filt.type!=='others'){
        return false
      }

      return true

  })
  return <>
    <div className="container">
        <Header />
        <Type />
        <Body />
        <Download />
        <Social />
        <About />
        <Skills technos={technos} handleFiltre={handle} filtre={filtre}/>
    </div>
  </>
}




export default App
