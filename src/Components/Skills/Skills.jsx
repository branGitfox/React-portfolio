import React from 'react';
import './Skills.css'
import skills from '/skills.png'

const style = {

    div:{

        marginTop:'40px'

    },
    h2:{
        color:'white',
        textAlign:'center',
        marginBottom:'20px',
        position:'relative'
  },

  btns:{
    padding:'10px 20px',
    borderRadius:'0px',
    border:'none'
  },

  filtresContainer:{
    border:'solid 1px purple',
    borderRadius:'5px',
    width:'374px',
    margin:'auto',
    padding:'5px'
  },

  tecnoContainer:{
    marginTop:'5px',
    padding:'5px'
  },

  divTech:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
    marginTop:'5px',
    gap:'1rem'

  },

  techs:{
    width:'70px',
    height:'50px',
    border:'solid 1px purple',
    borderRadius:'5px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }


  
}
function Skills({technos ,handleFiltre , filtre}){
  
    
    return <div style={style.div} className="skills-container">
        <h2 style={style.h2}>Skills <img style={{position:'absolute', top:'-2rem'}} src={skills} alt="" /></h2>
        <div style={style.filtresContainer} className="filtres-container">
            <button className={filtre==='All'?'active':'noneActive'} onClick={(e)=>handleFiltre(e)} style={style.btns}>All</button>
            <button className={filtre==='Front-Ends'?'active':'noneActive'} onClick={(e)=>handleFiltre(e)} style={style.btns}>Front-Ends</button>
            <button className={filtre==='Back-Ends'?'active':'noneActive'} onClick={(e)=>handleFiltre(e)} style={style.btns}>Back-Ends</button>
            <button className={filtre==='Others'?'active':'noneActive'} onClick={(e)=>handleFiltre(e)} style={style.btns}>Others</button>
            <div style={style.tecnoContainer} className="technos-container">
            {/* <hr /> */}
                <div style={style.divTech}>
                    {
                        technos.map(t => (
                            <div key={t.name} style={{
                                width:'70px',
                                height:'50px',
                                border:'solid 1px purple',
                                borderRadius:'5px',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                color:`${t.color}`
                             
                              }}  className="techs"><img style={{width:'40px', height:'40px',borderRadius:'5px'}} src={t.name} alt="" srcset="" />
                              </div>
                              
                        ))
                    }
                   
               
                </div>
            </div>
        </div>
        .
    </div>
}

export default Skills;
