import * as React from 'react';
import './NavMenu.scss';
import {Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavMenu extends React.Component {
    
    render(){
        console.log('im in the NavMenu')
  return ( 
      <section className='nav-menu'>
      <Link to="/main"> <div className='nav-item'><Icon className='icon-nav' type="home" theme="outlined" /> <p>Inicio</p> </div></Link>  
      <Link to="/challenge"><div className='nav-item'> <Icon className='icon-nav' type="star" theme="outlined" /> <p>Retos</p> </div> </Link> 
      <Link to="/groups"><div className='nav-item'> <Icon className='icon-nav' type="team" theme="outlined" /> <p>Grupos</p> </div></Link>  
      <Link to="/profile"><div className='nav-item'> <Icon className='icon-nav' type="user" theme="outlined" /> <p>Perfil</p> </div> </Link> 
      </section>
     
   ) ;
}
};

export default NavMenu;