import { CustomSelectProps, Item } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import React, { useEffect, useState, Fragment } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const CustomSelect = (props: CustomSelectProps) => {
 const [selected, setSelected] = useState<string>(props.value ? props.value : 'No seleccionado');
 const [query, setQuery] = useState('');

 useEffect(() => {
  props.value && props.value !== '' ? setSelected(props.value) : setSelected('No seleccionado');
 }, [props.value]);

 useEffect(() => {
  if (selected !== 'No seleccionado') props.handlerChange(selected);
 }, [selected]);

 const filteredData =
  query === ''
   ? props.data
   : props.data.filter((data: Item) => data.name!.toLowerCase().includes(query.toLowerCase()));

 return (
  <div className="relative  flex-1 flex flex-col justify-start items-stretch space-y-2">
   <label htmlFor="" className={'label-form'}>
    {props.label}
    <span className="text-rose-600">{`${props.isRequeried ? '*' : ''}`}</span>
   </label>
   <div className="flex-1 flex flex-col justify-stretch items-stretch rounded-lg bg-white  border-2">
    <Combobox value={selected} onChange={setSelected}>
     <div className="p-4 flex-1 flex flex-row justify-stretch items-center cursor-default overflow-hidden text-left">
      <Combobox.Input
       className={` flex-1 flex flex-row justify-between items-center text-select-form`}
       onChange={(event) => setQuery(event.target.value)}
       displayValue={(item: string) => item}
      />
      <Combobox.Button>
       <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" width={25} />
      </Combobox.Button>
     </div>
     <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={() => setQuery('')}
     >
      <Combobox.Options>
       <div className="p-2 space-y-2 h-[10rem] overflow-y-scroll">
        {filteredData.length === 0 && query !== '' ? (
         <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
          {`No existe la busqueda ${query}`}
         </div>
        ) : (
         filteredData.map((item: Item, i) => (
          <Combobox.Option key={i} value={item.name} className={props.stylySelect}>
           {({ active, selected }) => (
            <li
             className={`p-4 rounded-xl flex flex-row justify-start items-center space-x-4 ${
              active ? 'bg-rose-600 text-white' : 'bg-white text-black'
             }`}
            >
             {selected && <CheckIcon width={20} />}
             {item.name}
            </li>
           )}
          </Combobox.Option>
         ))
        )}
       </div>
      </Combobox.Options>
     </Transition>
    </Combobox>
   </div>
  </div>
 );
};

export { CustomSelect };
