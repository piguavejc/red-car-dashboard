import { CustomButton } from '@/atomic/elements';
import { images, types } from '@/constants';
import { CustomModalProps } from '@/types';
import Image from 'next/image';
import React from 'react';

{
 /* body modal */
}
const CustomModal = (props: CustomModalProps) => {
 return (
  <div className="bg-helper p-16 rounded-lg flex-col-start-stretch">
   {/* photo modal */}
   <div className="flex justify-center items-center">
    <Image
     width={300}
     height={300}
     alt=""
     src={
      props.setting.type === types.dialog.error ? images.warning.src.src : images.success.src.src
     }
    />
   </div>
   {/* title and message modal */}
   <h1 className="header-2">
    {props.setting.type === types.dialog.error
     ? 'Mensaje de advertencia'
     : 'Mensaje de verificacion'}
   </h1>
   <p className="default-text">{props.setting.message}</p>
   {/* Button modal */}
   {props.setting.type === types.dialog.success && (
    <CustomButton
     type={types.button.default}
     isDisable={false}
     variant={types.variant.button.primary}
     text={'Ok'}
     handlerPress={props.setting.handlerHidde}
     title={'Ok'}
    />
   )}
  </div>
 );
};

export { CustomModal };
