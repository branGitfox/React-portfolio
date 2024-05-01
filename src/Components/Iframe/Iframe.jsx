import React, { Suspense } from 'react';
const style = {
    container:{
        width:'100%',
        height:'auto',
        
    },
    iframe:{
        width:'100%',
        height:'100%',
        display:'block',
        zIndex:'1000'
    }
}
function Iframe({link}){
    return <div style={style.container} className="iframe-container">
        <iframe style={style.iframe} src={link} frameborder="1"></iframe>
    </div>
}

export default Iframe;
