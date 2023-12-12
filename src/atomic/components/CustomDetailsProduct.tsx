import { CustomDetailsProductProps } from '@/types';
import { CustomButton } from '@/atomic/elements';
import { types, data } from '@/constants';
import React, { useState } from 'react';
import Image from 'next/image';

const { product } = data.screens.dashboard.details;

const CustomDetailsProduct = (props: CustomDetailsProductProps) => {
 const [position, setPosition] = useState<number>(0);
 const links = [props.data.features, props.data.summary, props.data.dosage];
 const handlerPosition = (i: number) => {
  setPosition(i);
 };
 return (
  <section className="flex-1 flex flex-col justify-stretch items-stretch space-y-8">
   {props.handlerClose && (
    <CustomButton
     title="Cerrar"
     type={types.button.icon}
     className="self-center"
     icon={{
      type: types.icon.XCircle,
      strokeWidth: 1,
      color: '#50577A',
      size: 50,
     }}
     handlerPress={props.handlerClose}
    />
   )}
   <div className="p-4 flex-1 flex flex-row justify-stretch items-center space-x-4 bg-slate-100 rounded-xl">
    <div className="flex-1 flex flex-row justify-start items-center space-x-2">
     <Image
      className="rounded-full w-[7rem] h-[7rem] bg-slate-300 object-contain"
      src={String(props.data.photo)}
      alt={String(props.data.product)}
      width={150}
      height={150}
     />
     <h2 className="title-form"> {props.data.product} </h2>
    </div>
    <div className="flex-1 flex flex-col justify-center items-end space-y-2">
     <p className="text-slate-100 font-semibold p-4 rounded-xl bg-rose-600">
      {props.data.laboratory}
     </p>
     <p className="text-slate-100 font-semibold p-4 rounded-xl bg-rose-600">
      {props.data.category}
     </p>
    </div>
   </div>
   <section className="p-4 flex-1 w-full flex flex-col justify-stretch items-start bg-slate-100 rounded-xl space-y-4">
    <ul className="w-full flex flex-row justify-start items-center space-x-2">
     {product.map((detail, i) => null)}
    </ul>
    <p className="p-4 w-full rounded-xl text-xl bg-slate-200  text-slate-700 flex flex-row justify-between items-start space-x-2">
     {links[position]}
    </p>
   </section>
  </section>
 );
};

export { CustomDetailsProduct };
// <CustomButton
//     key={i}
//     type={types.button.default}
//     text={detail}
//     title={detail}
//     stylyButton={`${position === i ? 'bg-rose-600' : 'bg-slate-200'} p-4 rounded-xl`}
//     stylyText={`text-xl text-slate-700 font-semibold ${position === i ? 'text-white' : 'text-slate-700'
//         }`}
//     handlerPress={() => handlerPosition(i)}
// />
