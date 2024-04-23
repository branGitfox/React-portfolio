import React from 'react';
const style = {
    nav:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'20px',
        borderBottom:'solid 1px black'
    }
}

function Header(){
    return <nav style={style.nav}>
        <div className="nav-logo">
            <h2><span>{'<'}</span>BrandonDEV<span>{'/>'}</span></h2>
        </div>
        <div className="nav-link">
            <a href="#">Github</a>
        </div>
    </nav>
}

export default Header;
