import React, { useEffect, useState, useRef, useCallback, useId, useMemo, lazy, Suspense } from 'react'
import Filtre from './components/Filtre'
import Input from './components/Input'
import Header from './components/Header'
import TasksList from './components/TasksList';
import { createPortal } from 'react-dom';


function App() {  
  const [status , setStatus] = useState(false)
  const handleClick = () => {
    setStatus(!status)
  }
  return <>
    <button onClick={handleClick}>Articles</button>
    {status && <Articles/>}
  </>
}


function Articles(){
  const Lazi = lazy(() => import('./components/Modal'))
  return <Suspense fallback={<Spinner />}>
    <Lazi />
  </Suspense>
}


function Spinner(){
  return <div style={{
    width:'50px',
    height:'50px',
    border:'solid 1px black',
    transform:rotate,
    transition:'.5s'
  }}>

  </div>
}




export default App
