import React from 'react';
import './Body.css'
import me from '../../assets/me.jpeg'
const style = {
    body:{
        width:'90%',
        margin:'7rem auto',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },

    profil:{
        // width:'35%',
        height:'auto',
        // border:'solid 1px black',
        display:'flex',
        justifyContent:'center'
        
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
        marginBottom:'2rem',
        fontSize:'17px',
        lineHeight:'20px'

    },

    label:{
        padding:'10px 20px',
        background:'linear-gradient( rgba(1, 1, 100, 0.808) , rgb(53, 2, 53)',
        border:'solid 1px purple',
        borderRadius:'5px',
        textTransform:'capitalize',
        color:'violet',
        boxShadow:'0px 0px 10px violet',
        cursor:'pointer'
    },

    pImgC:{
        width:'250px',
        height:'250px',
        // border:'solid 1px violet',
        borderRadius:'50%',
        boxShadow:'1px 1px 5px violet',
        background:`url(${me})`,
        backgroundRepeat:'no-repeat',
        backgroundsize:'contain',
        backgroundPosition:'center'
    }


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
                <label style={style.label} htmlFor="input">
                    Contact me
                </label>
            </div>
        </div>
        <div style={style.profil} className="profil">
                <div  style={style.pImgC} className="profil-img-container">
                    {/* <img src={reactSvg} alt="" /> */}
                </div>
        </div>
    </div>
}

export default Body;
