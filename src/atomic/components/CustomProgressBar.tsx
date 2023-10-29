import React from 'react';
import { CustomButton } from '@/atomic/elements';
import { typesButton } from '@/constants';
import { CustomProgressBarProps } from '@/types';

const CustomProgressBar = (props: CustomProgressBarProps) => {
 return (
  <nav>
   <ul className="flexRowBetween space-x-5">
    {props.items.map((item, i) => (
     <CustomButton
      key={i}
      stylyButton={`${
       props.posiition >= i ? 'text-slate-100' : 'text-slate-600'
      } font-semibold text-xl cursor-pointer`}
      stylyText={`${
       props.posiition >= i ? 'bg-rose-600' : 'bg-slate-300'
      } px-8 py-4  p-4 rounded-lg`}
      type={typesButton.default}
      title={'' + (i + 1)}
      text={'' + (i + 1)}
      handlerPress={() => props.handlerItem(i)}
     />
    ))}
   </ul>
  </nav>
 );
};

export { CustomProgressBar };
