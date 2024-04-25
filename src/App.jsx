import React from 'react'
import Header from './Components/Header/Header'
import Type from './Components/Type/Type'
import Body from './Components/Body/Body'
import Download from './Components/Cv/Download'
import Social from './Components/Social/Social'

function App() {  

  return <>
    <div className="container">
        <Header />
        <Type />
        <Body />
        <Download />
        <Social />
    </div>
  </>
}




export default App
