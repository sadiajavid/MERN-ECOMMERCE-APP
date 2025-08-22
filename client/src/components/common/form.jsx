import React from 'react'
import { Input } from "../ui/input";
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const CommonForm = ({formControl,formData,setFormData,onSubmit,buttonText}) => {
  let element=null;
  
  
  
  function renderComponentByInputType(getControlItem){
    const value= formData[ getControlItem.name ] || '';
    switch(getControlItem.componentType){
      case'input':
      element=(
        <Input  
         name={getControlItem.name}
         label={getControlItem.label}
         id={getControlItem.name}
         value={value}
          onChange={(e)=>{
          setFormData({
            ...formData,
            [getControlItem.name]:e.target.value,
          })
         }}
         /> 
      )
      break;
      case'textarea':
      element=(
        <Textarea  
         name={getControlItem.name}
         label={getControlItem.label}
         id={getControlItem.name}
         value={value}
         onChange={(e)=>{
          setFormData({
            ...formData,
            [getControlItem.name]:e.target.value,
          })
         }}

         /> 
      )
      break;

      default:
         element=(
        <Input  
         name={getControlItem.name}
         label={getControlItem.label}
         id={getControlItem.name}
         value={value}
         onChange={(e)=>{
          setFormData({
            ...formData,
            [getControlItem.name]:e.target.value,
          })
         }}
         /> 
      )
        break;
    }


  }
  return (
      <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-3'>
          {
           formControl.map((controlItem)=>{
            return(
            <div className="grid w-full gap-1.5" key={controlItem.name}>
              <label>{controlItem.label} </label>
              {renderComponentByInputType(controlItem)}
            </div>
            )

           })
          }

        </div>
        <Button type="submit" className="mt-2 w-full">{buttonText || 'Submit'}</Button>

      </form>
  )
}

export default CommonForm