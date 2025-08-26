import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { loginFormControl } from '@/config';
import CommonForm from '@/components/common/form';
import { loginUser } from '@/store/auth-slice';
import { useDispatch } from 'react-redux';
import { useToast } from '@/hooks/use-toast';

const AuthLogin = () => {
  const [formData,setFormData]=useState({
     email:'',
     password:''
  })
   const dispatch=useDispatch();
  const navigate=useNavigate();
  const {toast}=useToast();
  const onSubmit=(e)=>{
   e.preventDefault();
    dispatch(loginUser(formData)).then((data)=>{
   console.log(data);
         if(data?.payload?.success){
           toast({
             title:data?.payload?.message
           })
         }else{
           toast({
             title:data?.payload?.message,
             variant:'destructive',
           })
         }
         });
   console.log(formData)
  }
 
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-toght text-foreground'>Sign In to your Account</h1>
        <p>Don't have account
        <Link className='font-medium text-primary hover:underline' to="/auth/register" >
         Register
        </Link>
        </p>
      </div>
      <CommonForm
      formControl={loginFormControl}
      formData={formData}
      setFormData={setFormData}
      buttonText={"Sign In"}
      onSubmit={onSubmit}
         />
    </div> 

 
  )
}

export default AuthLogin