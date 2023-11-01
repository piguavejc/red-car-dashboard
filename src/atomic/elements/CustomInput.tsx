import { CustomInputProps } from '@/types';
import React from 'react';

const CustomInput = (props: CustomInputProps) => {
 return (
  <div className={props.className}>
   {props.label && (
    <label htmlFor={props.id} className={props.styleLabel}>
     {props.label}
     <span className="text-rose-600">{`${props.isRequeried && props.isRequeried ? '*' : ''}`}</span>
    </label>
   )}
   <textarea
    rows={1}
    id={props.id}
    value={props.value === undefined ? '' : props.value}
    disabled={props.isDisable}
    className={props.stylyText}
    onBlur={props.hanhandlerBlur}
    onChange={props.handlerChange}
    placeholder={props.placeholder}
   ></textarea>
   {/* <input
    type="text"
    id={props.id}
    value={props.value === undefined ? '' : props.value}
    disabled={props.isDisable}
    className={props.stylyText}
    onBlur={props.hanhandlerBlur}
    onChange={props.handlerChange}
    placeholder={props.placeholder}
   /> */}
   {props.validation && <p className="text-red-700 font-semibold">{props.messageError}</p>}
  </div>
 );
};

export { CustomInput };
