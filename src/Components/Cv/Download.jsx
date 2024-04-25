import React from 'react';
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
        borderRadius:'20px'

    }
}
function Download(){
    return <div style={style.div}>
        <a style={style.a} href="">Download CV</a>
        
    </div>
}

export default Download;
