import React from 'react';

function TasksList({list, removeTask, onchange, modifyTodos}){
    return <div>
        {

        list.map(l => <tr id={l.id}><td>{l.task}</td><input type="checkbox" onChange={(e)=>onchange(l.id, e.target.checked)}/><button onClick={()=>modifyTodos(l.task, l.id)}>Modifier</button><button onClick={() =>removeTask(l.id)}>RemoveTask</button></tr>)
        }
    </div>
    
        
    
}

export default TasksList;
