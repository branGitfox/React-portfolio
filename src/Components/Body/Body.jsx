import React from 'react';
import './Body.css'
const style = {
    body:{
        width:'90%',
        margin:'7rem auto',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },

    profil:{
        width:'35%',
        height:'30px',
        border:'solid 1px black'
    },

    nom:{
        fontSize:'40px',
        color: 'violet',
        textShadow: '1px 1px 1px ',
        marginBottom:'20px'
    },

    stack:{
        fontSize:'30px',
        color:'whitesmoke',
        fontWeight:'200'
    },
    motivation:{
        color:'whitesmoke',
        fontWeight:'200',
        marginTop:'7px',
        fontSize:'17px',
        lineHeight:'20px'

    },


    // intro:{
    //     width:'45%',
       
    // }
    



}
function Body() {
    return <div style={style.body} className="body">
        <div style={style.intro} className="intro">
            <div className="intro-phrase">
                <p style={style.nom}>Ravomanana Brandon Fidelin.</p>
                <p style={style.stack}>Full stack developper</p>
                <p style={style.motivation}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quia. Maxime quas voluptas aperiam, modi pariatur deserunt earum eveniet fugit laboriosam facilis possimus, voluptates accusantium repellat! Quidem iure repellat a.</p>
            </div>
            <div className="hire">
                <label htmlFor="input">
                    Join me
                </label>
            </div>
        </div>
        <div style={style.profil} className="profil">

        </div>
    </div>
}

export default Body;
