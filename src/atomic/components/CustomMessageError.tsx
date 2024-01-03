import { CustomMessageErrorProps } from '@/types';
import { images } from '@/constants';
import { data } from '@/constants';
import React from 'react';
import Image from 'next/image';

const CustomMessageError = (props: CustomMessageErrorProps) => {
 return (
  <section className="flex-col-center-center h-screen bg-slate-200 px-4 py-8  rounded-lg">
   <div className="bg-slate-300 p-8 rounded-xl flex-col-center-center">
    <h6 className="header-3 flex-initial"> Mensaje de error en el servidor </h6>
    <p className="default-text flex-initial text-left"> {props.message} </p>
    <Image className="max-w-[30%] rounded-xl" src={images.warning.src} alt={images.warning.alt} />
    <p className="default-text flex-initial text-left">
     {' '}
     por favor recargue la pagina y vuelvalo a intentar{' '}
    </p>
   </div>
  </section>
 );
};

export { CustomMessageError };
