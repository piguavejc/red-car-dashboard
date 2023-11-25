import React from 'react';
import { CustomItemTabsProps } from '@/types';

const CustomItemTab = (props: CustomItemTabsProps) => {
 return props.isActive ? (
  <li className="py-2 px-4 rounded-xl bg-rose-600">
   <button
    title={`Laboratorio ${props.item}`}
    className="w-[150px] text-slate-200 font-bold text-xl whitespace-nowrap"
    onClick={() => props.returnItem(props.item)}
   >
    {props.item}
   </button>
  </li>
 ) : (
  <li className="py-2 px-4 bg-slate-300 rounded-xl text-xl">
   <button
    title={`Laboratorio ${props.item}`}
    className="w-[150px] text-slate-600 whitespace-nowrap font-semibold"
    onClick={() => props.returnItem(props.item)}
   >
    {props.item}
   </button>
  </li>
 );
};

export { CustomItemTab };
