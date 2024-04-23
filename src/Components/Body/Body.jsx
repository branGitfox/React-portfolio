import React from 'react';
const style = {
    body:{
        width:'90%',
        margin:'6rem auto',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },

    profil:{
        width:'35%',
        height:'30px',
        border:'solid 1px black'
    }


}
function Body() {
    return <div style={style.body} className="body">
        <div className="intro">
            <div className="intro-phrase">
                <p>Ravomanana Brandon Fidelin.</p>
                <p>Full stack developper</p>
                <p>I'm motivated and self taught</p>
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
