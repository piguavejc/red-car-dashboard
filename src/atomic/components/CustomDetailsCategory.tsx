import { CustomDetailsCategoryProps } from '@/types';
import { CustomButton } from '@/atomic/elements';
import { types } from '@/constants';
import Image from 'next/image';
import React from 'react';

const CustomDetailsCategory = (props: CustomDetailsCategoryProps) => {
 return (
  <section className="flex-col-stretch-stretch">
   {props.handlerClose && (
    <CustomButton
     title="Cerrar"
     type={types.button.icon}
     className="self-center"
     icon={types.icon.close}
     handlerPress={props.handlerClose}
    />
   )}
   <div className="flex-col-center-center">
    <Image
     className="rounded-full w-[15rem] h-[15rem] bg-slate-300 object-contain"
     src={String(props.data.photo)}
     alt={String(props.data.category)}
     width={150}
     height={150}
    />
    <h2 className="title-form"> {props.data.category} </h2>
   </div>
  </section>
 );
};

export { CustomDetailsCategory };
