import * as React from 'react';
import './MainApp.scss';
import NavMenu from '../../components/NavMenu/NavMenu.js'

class MainApp extends React.Component {
    
    render(){

  return ( 
      <section className='mainapp'>
     <h1 style={{padding: '15px'}}> Hola esta es la pagina principal  😀 
         Elige una de las opciones de abajo </h1>

      </section>
     
   ) ;
}
};

export default MainApp;