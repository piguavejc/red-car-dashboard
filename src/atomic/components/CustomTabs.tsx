import React from 'react';
import { CustomItemTab } from '@/atomic/elements';
import { CustomTabsProps } from '@/types';

const CustomTabs = (props: CustomTabsProps) => {
 props.items.push('Todos');
 return (
  <ul className="w-[100%] flex flex-row justify-between items-center space-x-4 overflow-x-auto pb-4">
   {props.items
    .reverse()
    .map((item: string, i: number) =>
     props.itemFocus === item ? (
      <CustomItemTab key={i} isActive={true} item={item} returnItem={props.returnItem} />
     ) : (
      <CustomItemTab key={i} isActive={false} item={item} returnItem={props.returnItem} />
     ),
    )}
  </ul>
 );
};

export { CustomTabs };
