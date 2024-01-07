import React from 'react';
import { CustomButton } from '@/atomic/elements';
import { CustomHeaderUserProps } from '@/types';
import { types } from '@/constants';
import { signOut } from 'next-auth/react';

const CustomHeaderUser = (props: CustomHeaderUserProps) => {
 return (
  <nav className="p-4 bg-helper flex-row-between-center flex-initial">
   <CustomButton
    type={types.button.default}
    text={'Salir'}
    variant={types.variant.button.primary}
    title={'Salir'}
    handlerPress={() => signOut()}
   />
   <h2 className="header-3"> {props.user} </h2>
  </nav>
 );
};

export { CustomHeaderUser };
