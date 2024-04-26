import React from 'react';
import { FcStart } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { TbBrandGmail } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import  './Social.css'
const style = {
    div:{
        display:'flex',
        justifyContent:'center',
        // border:'solid 1px black',
        margin:'auto',
        marginTop:'7rem',
        gap:'2rem'

    },


    icon:{
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        padding:'2px'
    },

    childDiv:{
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        border:'solid 2px purple',
        boxShadow:'inset 0px 0px 2px purple',
        display:'flex',
        alignItems:'center',
        // padding:'5px',
        justifyContent:'center'
        // marginRight:'10px',
        
    }

}
function Social(){
    return <div style={style.div} className="social-container">
        <div style={style.childDiv} className="youtube"><FcStart style={style.icon}/></div>
        <div style={style.childDiv} className="mails"><TbBrandGmail style={{color:'whitesmoke', width:'50px',  height:'50px'}}/></div>
        <div style={style.childDiv} className="instagram"><FaSquareInstagram style={{color:'pink', width:'40px',  height:'40px'}}/></div>
        <div style={style.childDiv} className="facebook"><FaFacebook style={{color:'blue', width:'50px',  height:'50px'}}/></div>
    </div>
}

export default Social;
