import { CustomInputProps } from '@/types';
import React from 'react';

const CustomInput = (props: CustomInputProps) => {
 return (
  <div className={'field-form'}>
   {props.label && (
    <label htmlFor={props.id} className={'label-form'}>
     {props.label}
     <span className="text-rose-600">{`${props.isRequeried && props.isRequeried ? '*' : ''}`}</span>
    </label>
   )}
   <input
    type="text"
    id={props.id}
    value={props.value === undefined ? '' : props.value}
    disabled={props.isDisable}
    className={'text-form'}
    onBlur={props.hanhandlerBlur}
    onChange={props.handlerChange}
    placeholder={props.placeholder}
   />
   {props.validation && <p className="text-error-form">{props.messageError}</p>}
  </div>
 );
};

export { CustomInput };
