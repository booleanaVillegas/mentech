import * as React from 'react';
import './SignUp.scss';
import FormSignUp from '../../components/FormSignUp/FormSignUp.js'

class SignUp extends React.Component {
    
    render(){
        console.log('im in the SignUp')
  return ( 
      <section className='sign-up'>
        <FormSignUp />
      </section>
     
   ) ;
}
};

export default SignUp;
