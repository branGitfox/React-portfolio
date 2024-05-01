import React from 'react';
const style = {
    footer:{
        color:'purple',
        textShadow:'0px 0px 1px whitesmoke',
        textAlign:'center'
    }
}
const Footer = () => {
    return <footer style={style.footer}>
        CopyRight c {new Date().getFullYear()} <a style={{color:'purple'}} href="">BranGitFox</a>.
    </footer>
}

export default Footer;
