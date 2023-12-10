import { CustomDetailsCategoryProps } from '@/types';
import { CustomButton } from '@/atomic/elements';
import { types } from '@/constants';
import Image from 'next/image';
import React from 'react';

const CustomDetailsCategory = (props: CustomDetailsCategoryProps) => {
 return (
  <section className="flex-1 flex flex-col justify-stretch items-stretch space-y-8">
   {props.handlerClose && (
    <CustomButton
     title="Cerrar"
     type={types.button.icon}
     stylyButton="self-center"
     icon={{
      type: types.icon.XCircle,
      strokeWidth: 1,
      color: '#50577A',
      size: 50,
     }}
     handlerPress={props.handlerClose}
    />
   )}
   <div className="flex-1 flex flex-col justify-center items-center space-y-8">
    <Image
     className="rounded-full w-[15rem] h-[15rem] bg-slate-300 object-contain"
     src={String(props.data.photo)}
     alt={String(props.data.category)}
     width={150}
     height={150}
    />
    <h2 className="colorTitleForm"> {props.data.category} </h2>
   </div>
  </section>
 );
};

export { CustomDetailsCategory };
