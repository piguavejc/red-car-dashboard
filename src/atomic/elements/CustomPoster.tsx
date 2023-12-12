import React from 'react';
import Image from 'next/image';
import { PosterProps } from '@/types';
import { types } from '@/constants';

const CustomPoster = (props: PosterProps) => {
 return (
  <div className=" p-4 flexCenter border-4 border-dashed w-full min-h-[200px] relative">
   <label
    htmlFor={props.id}
    className="flexCenter label-form label w-full min-h-[200px] cursor-pointer"
   >
    {!props.value && props.label}
   </label>
   <input
    id={props.id}
    type="file"
    accept="image/*"
    required={props.type === types.form.create ? true : false}
    className="absolute z-30 w-full opacity-0 cursor-pointer;"
    onChange={props.handlerChange}
    onBlur={props.hanhandlerBlur}
   />
   {props.value && (
    <Image className="object-contain z-20" src={props.urlImage || ''} alt={'Project poster'} fill />
   )}
   {props.validation && <p className="text-red-700 font-semibold">{props.messageError}</p>}
  </div>
 );
};

export { CustomPoster };
