import { CustomButton } from '@/atomic/elements';
import { CustomHeaderProps } from '@/types';
import { types } from '@/constants';
import React from 'react';

const CustomHeader = (props: CustomHeaderProps) => {
 return (
  <nav className="p-4 flex-row-reverese-between-center flex-initial">
   <ul className="flex-row-end-center">
    {props.list.map((item, i) => (
     <li key={i}>
      <CustomButton
       type={types.button.default}
       text={item}
       variant={props.target === i ? types.variant.button.primary : types.variant.button.secondary}
       handlerPress={() => props.hanlderTarget(i)}
       title={item}
      />
     </li>
    ))}
   </ul>
  </nav>
 );
};

export { CustomHeader };
