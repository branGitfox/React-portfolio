import React from 'react';
const style = {

    div:{

        marginTop:'20px'

    },
    h2:{
        color:'white',
        textAlign:'center',
        marginBottom:'10px'
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
function Skills({active, handleFiltre, technos}){
    return <div style={style.div} className="skills-container">
        <h2 style={style.h2}>Skills</h2>
        <div style={style.filtresContainer} className="filtres-container">
            <button style={style.btns}>All</button>
            <button style={style.btns}>Front-Ends</button>
            <button style={style.btns}>Back-Ends</button>
            <button style={style.btns}>Others</button>
            <div style={style.tecnoContainer} className="technos-container">
            <hr />
                <div style={style.divTech}>
                    {
                        technos.map(t => (
                            <div key={t.name} style={style.techs} className="techs">{t.name}</div>
                        ))
                    }
                   
               
                </div>
            </div>
        </div>
        .
    </div>
}

export default Skills;
