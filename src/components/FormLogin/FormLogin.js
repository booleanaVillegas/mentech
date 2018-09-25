import * as React from 'react';
import style from './FormLogin.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class FormLogin extends React.Component {
    
    render(){
        console.log('im in the Formlogin')
  return ( 
      <section className={style.login}>
        <Form onSubmit='TODO crear metodo' className="login-form">
        <FormItem>       
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange='TODO metodo hanlder'/>
        </FormItem>
        <FormItem>       
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" onChange='TODO metodo hanlder'/>
        </FormItem>
        </Form>    
      </section>
     
   ) ;
}
};

export default FormLogin;