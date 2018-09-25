
import React from "react";
import ReactDOM from "react-dom";
import Login from '../src/containers/Login/Login.js';
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from 'antd';
/*
import 'antd/dist/antd.css';
import 'antd/es/input/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/cascader/style/index.css';*/

class Index extends React.Component {
    
    render(){
        console.log('im in the index')
  return ( <Router>
      <section>
        <h1>holaaas esta ya me funciona</h1>
        <Button type="primary">Hola unde aqui</Button>
        <Login />
     {/* <Route exact path="/" component={Login} />*/}
     
      </section>
      </Router>
   ) ;
}
};

ReactDOM.render(<Index />, document.getElementById("index"));