import { CustomItemTabsProps } from '@/types';
import { CustomButton } from '.';
import React from 'react';
import { types } from '@/constants';

const CustomItemTab = (props: CustomItemTabsProps) => {
 return props.isActive ? (
  <CustomButton
   text={props.item}
   type={types.button.default}
   title={`Laboratorio ${props.item}`}
   variant={types.variant.button.primary}
   handlerPress={() => props.returnItem(props.item)}
  />
 ) : (
  <CustomButton
   text={props.item}
   type={types.button.default}
   title={`Laboratorio ${props.item}`}
   variant={types.variant.button.secondary}
   handlerPress={() => props.returnItem(props.item)}
  />
 );
};

export { CustomItemTab };
