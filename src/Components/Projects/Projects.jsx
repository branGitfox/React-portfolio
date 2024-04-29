import React from 'react';
import project from '../../../public/project.png'
import me from '../../assets/me.jpeg'
import './Project.css'
const style= {
    div:{
        marginTop:'20px'
    },
    h2:{
        color:'white',
        textAlign:'center',
        marginBottom:'20px',
        position:'relative'
        
    },
    projects:{
        width:'100%',
        height:'auto',
        // border:'solid 1px',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        padding:'10px',
        gap:'15px'
    },

    project:{
        width:'400px',
        height:'400px',
        border:'solid 1px purple',
        borderRadius:'5px',
        boxShadow:'7px 7px 10px purple',
        padding:'10px'
    },

    h3:{
        color:'violet',
        textAlign:'left',
        marginTop:'1rem',
        marginBottom:'.3rem',
        // textShadow:'5px 1px 5px purple'
    },

    span:{
        color:'whitesmoke',
        fontWeight:'200'
    },
    actions:{
        width:'100%',
        height:'calc(100% - 320px)',
        border:'solid 1px',
        marginTop:'10px'
    }
   

  
}

function Projects({projects}){
    return <div style={style.div} className="project-container">
        <h2 style={style.h2}>Projects <img style={{position:'absolute', top:'-1.2rem'}} src={project} alt="" /></h2>
        <div style={style.projects} className="projects">
            {
                projects.map(p => (
                    <div style={style.project} className="project">
                    <h3 style={style.h3} className="project-title"><span style={style.span}>Title:</span> {p.title}</h3>
                    <h4 className='project-techs'><span style={style.span}>Techs: {p.techs.join(', ')}</span></h4>
                    <div style={{
                        width:'100%',
                        height:'calc(100% - 170px)',
                        // border:'solid 1px ',
                        borderRadius:'2px',
                        marginTop:'20px',
                        background:`url(${me})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:"contain",
                        backgroundPosition:'center'
                    }} 
                    className="image-container"
                    >

                    </div>
                    <div style={style.actions} className="actions-container">

                    </div>
                </div>
                ))
            }
          
        </div>
    </div>
}

export default Projects;
