import * as React from 'react';
import './Login.scss';
import FormLogin from '../../components/FormLogin/FormLogin.js'

class Login extends React.Component {
    
    render(){
        console.log('im in the login')
  return ( 
      <section className='login'>
        <FormLogin />
      </section>
     
   ) ;
}
};

export default Login;


