import React, { useEffect, useState } from 'react';
import { CustomSelectProps } from '@/types';
import { Listbox } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';

const CustomSelect = (props: CustomSelectProps) => {
 const [selected, setSelected] = useState<string>(props.value ? props.value : 'No seleccionado');
 useEffect(() => {
  props.value && props.value !== '' ? setSelected(props.value) : setSelected('No seleccionado');
 }, [props.value]);
 useEffect(() => {
  if (selected !== 'No seleccionado') props.handlerChange(selected);
 }, [selected]);
 return (
  <div className="relative  w-full space-y-2">
   <label htmlFor="" className={props.stylyLabel}>
    {props.label}
    <span className="text-rose-600">{`${props.isRequeried ? '*' : ''}`}</span>
   </label>
   <div className="w-full p-4 bg-white border-2 border-gray-100 rounded-xl space-y-2">
    <Listbox value={selected} onChange={setSelected}>
     <Listbox.Button
      className={`${props.stylyLabel} w-full flex flex-row justify-between items-center `}
     >
      {selected} <HiChevronDown size={25} color={'gray'} />
     </Listbox.Button>
     <Listbox.Options>
      <div className="space-y-2 ">
       {props?.data.map((item, i) => (
        <Listbox.Option key={i} value={item.name} className={props.stylySelect}>
         {item.name}
        </Listbox.Option>
       ))}
      </div>
     </Listbox.Options>
    </Listbox>
   </div>
  </div>
 );
};

export { CustomSelect };
