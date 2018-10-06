
import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

import {BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from 'antd';
import 'antd/dist/antd.css';

import Login from '../src/containers/Login/Login.js';
import SignUp from '../src/containers/SignUp/SignUp.js';
import MainApp from '../src/containers/MainApp/MainApp.js';
import NavMenu from '../src/components/NavMenu/NavMenu.js';

class Index extends React.Component {
    
    render(){
        console.log('im in the index')
  return ( <Router>
      <section>
     {/* <Route exact path="/" component={Login} />*/}
      
     {/* 
    <Route exact path="/signup" component={SignUp} /> 
    <Route exact path="/main" component={MainApp} />   */}
     <Route path="/" component={NavMenu} />  
     <Route exact path="/main" component={MainApp} />  
      </section>
      </Router>
   ) ;
}
};

ReactDOM.render(<Index />, document.getElementById("index"));