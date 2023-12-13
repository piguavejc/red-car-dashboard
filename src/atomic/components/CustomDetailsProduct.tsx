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
  <section className="flex-col-stretch-stretch">
   {props.handlerClose && (
    <CustomButton
     title="Cerrar"
     type={types.button.icon}
     className="self-center"
     icon={types.icon.XCircle}
     handlerPress={props.handlerClose}
    />
   )}
   <div className="p-4 flex-row-center-stretch bg-slate-100 rounded-xl">
    <div className="flex-row-start-center">
     <Image
      className="rounded-full w-[7rem] h-[7rem] bg-slate-300 object-contain"
      src={String(props.data.photo)}
      alt={String(props.data.product)}
      width={150}
      height={150}
     />
     <h2 className="title-form"> {props.data.product} </h2>
    </div>
    <div className="flex-col-center-end">
     <p className="text-slate-100 font-semibold p-4 rounded-xl bg-rose-600">
      {props.data.laboratory}
     </p>
     <p className="text-slate-100 font-semibold p-4 rounded-xl bg-rose-600">
      {props.data.category}
     </p>
    </div>
   </div>
   <section className="p-4 w-full flex-col-stretch-start bg-slate-100 rounded-xl">
    <ul className="w-full flex-row-start-center">
     {product.map((detail, i) => (
      <CustomButton
       key={i}
       type={types.button.default}
       text={detail}
       title={detail}
       variant={position === i ? types.variant.button.primary : types.variant.button.secondary}
       handlerPress={() => handlerPosition(i)}
      />
     ))}
    </ul>
    <p className="p-4 w-full rounded-xl text-xl bg-slate-200  text-slate-700 flex-row-between-start">
     {links[position]}
    </p>
   </section>
  </section>
 );
};

export { CustomDetailsProduct };
