import React from 'react';
const style = {
    nav:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'20px',
        // borderBottom:'solid 1px black',
        backgroundColor:'transparent',
        boxShadow:'0px 1px 10px puple',
        height:'10vh'
    },

    span:{
        color:'orange',
        fontWeight:'100',
        fontFamily:'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'

    },

    h2:{
        fontWeight:'700',
        color:'white'
    },
    navlinka:{
        padding:'20px 30px',
        textDecoration:'none',
        color:'whitesmoke',
        backgroundColor:'rgb(101, 0, 148)',
        borderRadius:'5px'
    }

    
}

function Header(){
    return <nav style={style.nav}>
        <div className="nav-logo">
            <h2 style={style.h2}><span style={style.span}>{'<'}</span>BrandonDEV<span style={style.span}>{'/>'}</span></h2>
        </div>
        <div className="nav-link">
            <a style={style.navlinka} href="#">GitHub</a>
        </div>
    </nav>
}

export default Header;
