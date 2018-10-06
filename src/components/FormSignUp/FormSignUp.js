import * as React from 'react';
import './FormSignUp.scss';
import { Form, Icon, Input, Button, Checkbox,Select,InputNumber } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const FormItem = Form.Item;

const FormSignUp = ()=> {    
  
        console.log('im in the FormSignUp')
  return ( 
      <section className='form-signup-component'>
        <Form onSubmit='TODO crear metodo' className="signup-form actual-signup-form" layout="horizontal">
        <FormItem className='input-form-signup' label='Usuario'>       
            <Input placeholder="Usuario" onChange='TODO metodo hanlder'/>
        </FormItem>
        <FormItem className='input-form-signup'label='Correo Electrónico'>       
            <Input placeholder="Email" onChange='TODO metodo hanlder'/>
        </FormItem>
        <FormItem className='input-form-signup'label='Contraseña'>       
            <Input placeholder="Contraseña" type="password"  onChange='TODO metodo hanlder'/>
        </FormItem>
        <FormItem className='input-form-signup'label='Confirmar contraseña'>       
            <Input placeholder="Confirmar Contraseña" type="password"  onChange='TODO metodo hanlder'/>
        </FormItem>
        <FormItem className='input-form-signup'label='Edad'>      
         
        <Select style={{ color: 'rgba(0,0,0,.25)' }} defaultValue="Edad" onChange='TODO metodo hanlder'>
            <Option value="Edad" disabled>Edad</Option>
            <Option value="11">11</Option>
            <Option value="11">12</Option>
            <Option value="11">13</Option>
            <Option value="11">14</Option>
            <Option value="11">15</Option>
            <Option value="11">16</Option>
            <Option value="11">17</Option>
        </Select>
       
        </FormItem>
        <FormItem className='input-form-signup'label='Barrio'>       
        <Select style={{ color: 'rgba(0,0,0,.25)' }} defaultValue="Barrio" onChange='TODO metodo hanlder'>
            <Option value="Barrio" disabled>Edad</Option>
            <Option value="11">Potrero Grande</Option>
            <Option value="11">Conquistadores</Option>
            <Option value="11">Agua Blanca</Option>
            <Option value="11">Obrero</Option>
            <Option value="11">Siloe</Option>
            <Option value="11">Limonar</Option>
            <Option value="11">Las Granjas</Option>
        </Select>
        </FormItem>
        <Button type="primary" htmlType="submit" className="signup-button">
        <Link to="/main">Iniciar Sesion</Link>
          </Button>
        </Form>    
      </section>
     
   ) ;
}
;

export default FormSignUp;