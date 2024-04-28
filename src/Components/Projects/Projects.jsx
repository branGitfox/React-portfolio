import React from 'react';
const style= {
    div:{
        marginTop:'20px'
    },
    h2:{
        color:'white',
        textAlign:'center',
        marginBottom:'20px'
        
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
        height:'300px',
        border:'solid 1px purple',
        borderRadius:'5px',
        boxShadow:'7px 7px 10px purple'
    }
}
function Projects(){
    return <div style={style.div} className="project-container">
        <h2 style={style.h2}>Projects</h2>
        <div style={style.projects} className="projects">
            <div style={style.project} className="project"></div>
            <div style={style.project} className="project"></div>
            <div style={style.project} className="project"></div>
        </div>
    </div>
}

export default Projects;
