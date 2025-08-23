import CommonForm from '@/components/common/form';
import { registerFormControl } from "@/config/index.js";
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const AuthRegister = () => {
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:''
  })
  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
  }
 
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-toght text-foreground'>Create New Account</h1>
        <p>Already Have an Account  
        <Link className='font-medium text-primary hover:underline' to="/auth/login" >
          Login
        </Link> 
        </p>
      </div>
         <CommonForm 
         formControl={registerFormControl}
         buttonText={"Sign Up"}
         formData={formData}
         setFormData={setFormData} 
        onSubmit={onSubmit}
         />
    </div>
 
  )
}

export default AuthRegister