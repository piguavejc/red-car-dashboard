import { CustomLoadingProps } from '@/types';
import { Oval } from 'react-loader-spinner';
import React from 'react';
import { types } from '@/constants';

/*  */

const CustomLoading = (props: CustomLoadingProps) => {
 const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 return (
  <>
   {props.variant === types.loading.normal && (
    <section className="w-full h-screen flex-row-center-center skeleton">
     <Oval
      height={80}
      width={80}
      color="gray"
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#666"
      strokeWidth={5}
      strokeWidthSecondary={5}
     />
    </section>
   )}
   {props.variant === types.loading.listVertical &&
    items.map((item, i) => (
     <li key={i} className="p-4 w-full flex-row-between-center bg-secondary rounded-lg skeleton">
      <section className="p-8 rounded-lg bg-slate-300"></section>
      <p className="flex-1 h-4 rounded-lg bg-slate-300"></p>
      <section className="p-8 rounded-lg bg-slate-300"></section>
      <section className="p-8 rounded-lg bg-slate-300"></section>
      <section className="p-8 rounded-lg bg-slate-300"></section>
     </li>
    ))}
   {props.variant === types.loading.listHorizontal &&
    items.map((item, i) => (
     <li
      key={i}
      className="p-4 w-full h-16 flex-row-center-center bg-secondary rounded-lg skeleton"
     >
      <p className="flex-1 h-4 rounded-lg bg-slate-300"></p>
     </li>
    ))}
   {props.variant === types.loading.grid &&
    items.map((item, i) => (
     <li
      key={i}
      className="bg-slate-200 w-[10rem] h-[20rem] p-8 flex-col-stretch-stretch rounded-xl space-y-4 cursor-pointer skeleton"
     ></li>
    ))}

   {props.variant === types.loading.image &&
    items.map((item, i) => (
     <li
      key={i}
      className="bg-slate-200 w-[5rem] h-[5rem] p-8 flex-col-stretch-stretch rounded-xl space-y-4 cursor-pointer"
     ></li>
    ))}
  </>
 );
};

export { CustomLoading };
