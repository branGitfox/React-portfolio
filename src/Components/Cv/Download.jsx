import React from 'react';
import './Download.css'
import cv from '/cv.pdf'
const style={
    div:{
        textAlign:'center',
    },

    a:{
        padding:'10px 25px',
        background:'linear-gradient(rgb(53, 2, 53), rgba(1, 1, 100, 0.808))',
        textDecoration:'none',
        textShadow:'1px 1px 2px violet',
        boxShadow:'1px 1px 5px violet',
        borderRadius:'20px',
        transition:'.5s'

    }
}
function Download(){
    return <div style={style.div}>
        <a style={style.a} href='' download={cv}>Download CV</a>
        
    </div>
}

export default Download;
