import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const CommonForm = ({formControl,formData,setFormData,onSubmit,isBtnDisabled,buttonText}) => {
  const renderComponenetByType=(getControlItem)=>{

    const value=formData[getControlItem.name] || '';
    switch(getControlItem.componentType){
     case 'input':
      return(
        <Input
        name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        type={getControlItem.text}
        id={getControlItem.name}
        value={value}
        onChange={(event)=>{
          setFormData({
            ...formData,
            [getControlItem.name]:event.target.value

          })
        }
        }
        />
      );
      break;
      case 'textarea':
        return(
          <Textarea 
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.text}
            id={getControlItem.name}
            value={value}
              onChange={(event)=>{
          setFormData({
            ...formData,
            [getControlItem.name]:event.target.value

          })
        }}
            />
        )
   break;
   default:
      return(
        <Input
        name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        type={getControlItem.text}
        id={getControlItem.name}
        value={value}
          onChange={(event)=>{
          setFormData({
            ...formData,
            [getControlItem.name]:event.target.value

          })
        }}
        />
      );
    
     }
  }
  return (
       <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-3'>
          {formControl.map((controlItem)=>(
            <div className='grid w-full gap-1.5' key={controlItem.name}>
              <Label>{controlItem.label} </Label>
              {renderComponenetByType(controlItem)}
              </div>
          ))}
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
        </div>
      </form>
  )
}

export default CommonForm