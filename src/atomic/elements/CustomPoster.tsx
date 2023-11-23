import React from 'react';
import Image from 'next/image';
import { PosterProps } from '@/types';
import { typesForm } from '@/constants';
import { usePoster } from '@/hooks';

const contentPoster = Object.freeze({
 label: 'Elije una foto de la categoria',
 alt: 'Project poster',
});
const CustomPoster = (props: PosterProps) => {
 return (
  <div className=" p-4 flexCenter border-4 border-dashed w-full min-h-[200px] relative">
   <label htmlFor={props.id} className="flexCenter label w-full min-h-[200px] cursor-pointer">
    {!props.value && contentPoster.label}
   </label>
   <input
    id={props.id}
    type="file"
    accept="image/*"
    required={props.type === typesForm.create ? true : false}
    className="absolute z-30 w-full opacity-0 cursor-pointer;"
    onChange={props.handlerChange}
    onBlur={props.hanhandlerBlur}
   />
   {props.value && (
    <Image
     className="object-contain z-20"
     src={props.urlImage || ''}
     alt={contentPoster.alt}
     fill
    />
   )}
   {props.validation && <p className="text-red-700 font-semibold">{props.messageError}</p>}
  </div>
 );
};

export { CustomPoster };
