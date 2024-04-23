import React, { useEffect, useState, useRef, useCallback, useId } from 'react'
import Filtre from './components/Filtre'
import Input from './components/Input'
import Header from './components/Header'
import TasksList from './components/TasksList';


function App() {
  const [newTask, setNewTask] = useState([])
  const [filtre, setFiltre]=useState({all:true, finished:false})
  const [modify, setModify] = useState(false)
  const [newInput, setNewInput] =useState('')
  const [taskId, setTaskId]= useState()
  const handleFiltre = (f)=>{
   
    setFiltre(f)
    
  }

  console.log(filtre);

  const ref = useRef()
  const handleInput =(e)=>{
    e.preventDefault()
    console.log(ref.current.value);
    setNewTask([...newTask,{id:Math.random() * 1000, task:ref.current.value, done:false}])
  }


    const filtererd = newTask.filter(t => {
      // if(!t.done){
      //   return false
      // }

      if(filtre.finished && !t.done){
        return false
      }
  
      return true
    })
  

  const removeTask = (id) =>{
    setNewTask(newTask.filter(t => t.id !==id)) 
  }

  const handleStatus = (id, done) => {
    filtererd.map(t => {
      if(t.id === id){
          t.task= t.task
          t.done=done
      }
    })
    // setNewTask([])
    // console.log(newTask);

    
  }

  const modifyTodos = (value, id) => {
    setModify((m) => !m)
    setNewInput(value)
    setTaskId(id)

  }

  const save = () => {
    newTask.map(t => {
      if(t.id=== taskId){
        t.task = newInput
      }
    })
  }

 
  console.log(newTask);
    return <>
        <Header />
        <Filtre handleFiltre={handleFiltre} filtres={filtre}/>
        <Input handleInput={handleInput} refer = {ref}/>
        <TasksList list={filtererd} removeTask={removeTask} onchange={handleStatus} modifyTodos={modifyTodos}/>
        {modify &&  <input type='text' value={newInput} onChange={(e)=>setNewInput(e.target.value)}/> }
        {modify && <button onClick={save}>Save</button>}
        
    </>
}

export default App
