import React from 'react';
import { CustomButton } from '@/atomic/elements';
import { CustomProgressBarProps } from '@/types';
import { types } from '@/constants';

const CustomProgressBar = (props: CustomProgressBarProps) => {
 return (
  <nav>
   <ul className="flex-row-between-stretch space-x-5">
    {props.items.map((item, i) => (
     <CustomButton
      key={i}
      variant={
       props.posiition === i ? types.variant.button.primary : types.variant.button.secondary
      }
      type={types.button.default}
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
/*   */
