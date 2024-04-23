import React, { useEffect, useRef, useState } from 'react';
const phrase = 'Hello, welcome to my portfolio'
const style ={
    div:{
        width:'40%',
        textAlign:'center',
        // marginTop:'10px',
        margin: ' 20px auto'
    },

    p:{
        color:'whitesmoke',
        fontWeight:'200',
        letterSpacing:'2px',
        fontSize:'30px'
    }

}
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

    
    return <div style={style.div} className="typing-container">
        <p style={style.p}>{typed}</p>
    </div>
}



export default Type;
