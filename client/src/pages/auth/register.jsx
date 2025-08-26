import CommonForm from '@/components/common/form';
import { registerFormControl } from "@/config/index.js";
import { useToast } from '@/hooks/use-toast';
import { registerUser } from '@/store/auth-slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

const AuthRegister = () => {
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:''
  });
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {toast}=useToast();
  const onSubmit=(e)=>{
    e.preventDefault();
    dispatch(registerUser(formData)).then((data)=>{

      if(data?.payload?.success){
        toast({
          title:data?.payload?.message
        })
        navigate('/auth/login');
      }else{
        toast({
          title:data?.payload?.message,
          variant:'destructive',
        })
      }
      });
     

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