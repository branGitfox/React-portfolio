import React from 'react';
import  './Social.css'
const style = {
    div:{
        display:'flex',
        justifyContent:'center',
        // border:'solid 1px black',
        margin:'auto',
        marginTop:'7rem',
        gap:'4rem'

    },

    childDiv:{
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        border:'solid 2px purple',
        boxShadow:'inset 0px 0px 2px purple'
        // marginRight:'10px',
        
    }

}
function Social(){
    return <div style={style.div} className="social-container">
        <div style={style.childDiv} className="youtube"></div>
        <div style={style.childDiv} className="mails"></div>
        <div style={style.childDiv} className="instagram"></div>
        <div style={style.childDiv} className="facebook"></div>
    </div>
}

export default Social;
