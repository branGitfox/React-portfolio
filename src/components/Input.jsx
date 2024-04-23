import React from 'react';

function Input({handleInput, refer}){
    return <div>
           <form onSubmit={handleInput}>
        <input type="text"  name='task' ref={refer}/>
        <button>Add</button>
    </form>
    </div>
     
}

export default Input;
