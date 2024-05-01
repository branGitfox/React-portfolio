import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Type from './Components/Type/Type'
import Body from './Components/Body/Body'
import Download from './Components/Cv/Download'
import Social from './Components/Social/Social'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import { CgSpinner } from 'react-icons/cg';
const TECHNOS = [
  {'name':'js.png', 'type':'front', color:'yellow'}, 
  {'name':'Sans titre.png', 'type':'front', color:'red'},
  {'name':'css.png', 'type':'front', color:'blue'},
  {'name':'react.svg', 'type':'front', color:'cyan'},
  {'name':'php.png', 'type':'back', color:'pink'},
  {'name':'images.png', 'type':'back', color:'violet'},
  {'name':'ajax.png', 'type':'back', color:'orangered'},
  {'name':'git.png', 'type':'others', color:'orange'},
]


function App() { 
  const [filtre, setFiltre] = useState('All')



  const projects=[
    {'title': 'Employed Management', 'techs':['HTML', 'CSS', 'Bootstrap', 'Javascript', 'PHP', 'Mysql', 'Ajax'], 'image':'project-gestion.png', 'code':'https://github.com/branGitfox/gestionEmployers',},
    {'title': 'Amidiko', 'techs':['HTML', 'CSS', 'Javascript', 'PHP', 'Mysql'], 'image':'project-gestion.png','code':'https://github.com/branGitfox/Amidiko'},
  ]
  const handle = (e) => {
    setFiltre(e.target.textContent)
  }

  const handleShowCode = (e,link) => {
    load(e)
    setTimeout(() => {
      location.href=link
    }, 2000)
    
  }

  const load = (e) => {   
    
    e.target.innerHTML= '<h5></h5>'
  }
    

  // console.log(PROJECTS);

  const redirectLive = () => {
    location.href="https://index.html"

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
        <Acceuil />
        <About />
        <Skills technos={technos} handleFiltre={handle} filtre={filtre}/>
        <Projects projects={projects}   handleShowCode={handleShowCode}/>
    </div>
  </>
}


function Acceuil(){
  return <>
        <Header />
        <Type />
        <Body />
        <Download />
        <Social />
  </>
}




export default App
