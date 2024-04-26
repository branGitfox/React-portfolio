import React from 'react';
import aboutme from '../../assets/aboutme.png'
import './About.css'
const style={
   div:{ width:'100%',
    display:'flex',
    justifyContent:'center',
    // padding:'10px',
    marginTop:'3rem'
    },

    img:{
        Width:'100%',
      
    }


    
}
function About(){
    return <div style={style.div} className="about-container">
        <img className='about-img' style={style.img} src={aboutme} alt="" />
    </div>
}

export default About;
