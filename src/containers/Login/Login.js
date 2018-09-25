import * as React from 'react';
import style from './Login.css';
import FormLogin from '../../components/FormLogin/FormLogin.js'

class Login extends React.Component {
    
    render(){
        console.log('im in the login')
  return ( 
      <section className={style.login}>
        <FormLogin />
      </section>
     
   ) ;
}
};

export default Login;


