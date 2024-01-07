import { CustomButton } from '@/atomic/elements';
import { CustomHeaderUserProps } from '@/types';
import { signOut } from 'next-auth/react';
import { images, types } from '@/constants';
import Image from 'next/image';
import React from 'react';

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
   <h2 className="header-3 text-right"> {props.user} </h2>
   <Image src={images.avatar.src} alt={images.avatar.alt} title={images.avatar.title} width={75} height={75}  />
  </nav>
 );
};

export { CustomHeaderUser };
