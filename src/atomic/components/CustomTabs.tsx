import React from 'react';
import { CustomItemTab } from '@/atomic/elements';
import { CustomTabsProps } from '@/types';

const CustomTabs = (props: CustomTabsProps) => {
 props.items.push('Todos');
 return (
  <ul className="w-[100%] flex-row-between-center flex-initial overflow-x-auto pb-4">
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
