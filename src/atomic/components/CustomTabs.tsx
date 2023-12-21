import React from 'react';
import { CustomItemTab } from '@/atomic/elements';
import { Oval } from 'react-loader-spinner';
import { CustomTabsProps } from '@/types';
import { data } from '@/constants';
const { tabs } = data.screens.product;

const CustomTabs = (props: CustomTabsProps) => {
 props.items.push('Todos');
 if (props.isLoading)
  return (
   <div className="w-[90%] component-loading flex-col-stretch-center lg:w-[70%]">
    <p className="default-text text-center">{tabs.loading}</p>
    <Oval
     height={80}
     width={80}
     color="gray"
     wrapperStyle={{}}
     wrapperClass=""
     visible={true}
     ariaLabel="oval-loading"
     secondaryColor="#666"
     strokeWidth={5}
     strokeWidthSecondary={5}
    />
   </div>
  );
 return (
  <ul className="w-[100%] pl-2 flex-row-start-center flex-initial overflow-x-auto pb-4">
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
