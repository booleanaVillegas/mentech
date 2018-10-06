import * as React from 'react';
import './FormLogin.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class FormLogin extends React.Component {
    
    render(){
        console.log('im in the Formlogin')
  return ( 
      <section className='form-login-component'>
        <Form onSubmit='TODO crear metodo' className="login-form actual-login-form">
        <FormItem className='input-form-login'>       
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Usuario" onChange='TODO metodo hanlder'/>
        </FormItem>
        <FormItem className='input-form-login'>       
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Contraseña" onChange='TODO metodo hanlder'/>
        </FormItem>
        <Button type="primary" htmlType="submit" className="login-button">
            Iniciar sesión
          </Button>
        </Form>    
      </section>
     
   ) ;
}
};

export default FormLogin;