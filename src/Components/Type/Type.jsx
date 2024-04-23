import React, { useEffect, useRef, useState } from 'react';
const phrase = 'Hello, welcome to my portfolio'
function Type(){
    // const ref = useRef()
    const[index, setIndex]=useState(0)
    const[typed, setTyped] = useState('')
    

    useEffect(() => {
        let ty= setTimeout(() =>{
            if(index === phrase.length-1){
               return
            }
            setIndex((index) => index + 1)
        }, 100)

        return () => clearTimeout(ty)
    })
    useEffect(() => {
        setTyped(typed+phrase[index])
    }, [index])

    
    return <div className="typing-container">
        <p>{typed}</p>
    </div>
}



export default Type;
