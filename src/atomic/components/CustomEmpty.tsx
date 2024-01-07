import { images, data } from '@/constants';
import Image from 'next/image';
import React from 'react';

const { globals } = data;
const CustomEmpty = () => {
 return (
  <div className="flex-col-center-center bg-helper px-4 py-8  rounded-lg">
   <Image
    src={images.redCar.src.src}
    className="flex-1"
    height={300}
    width={300}
    title={images.avatar.title}
    alt={images.avatar.alt}
   />
   <p className="default-text-bold"> {globals.empty.text} </p>
  </div>
 );
};

export { CustomEmpty };
