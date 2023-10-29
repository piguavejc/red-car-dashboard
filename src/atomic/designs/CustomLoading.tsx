import React from 'react';
import { CustomPhoto } from '@/atomic/elements';
import { images } from '@/constants';
import { CustomLoadingProps } from '@/types';

const CustomLoading = (props: CustomLoadingProps) => {
 return (
  <div className={`p-16  bg-white rounded-xl flexColCenterStretch  ${props.background}`}>
   <div className="space-y-4 ">
    <p className={`font-semibold text-4xl text-center ${props.colorText}`}>{props.message.title}</p>
    <p className={`font-normal text-xl text-center ${props.colorText}`}> {props.message.text} </p>
    <div className="flexCenter min-h-[200px]">
     <CustomPhoto
      className="object-contain"
      title={''}
      src={images.load.src.src}
      width={300}
      height={300}
     />
    </div>
   </div>
  </div>
 );
};

export { CustomLoading };
