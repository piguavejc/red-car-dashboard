import { CustomPhotoProps } from '@/types';
import React, { useState } from 'react';
import Image from 'next/image';

const CustomPhoto = (props: CustomPhotoProps) => {
 const [isLoading, setIsLoading] = useState<boolean>(true);
 return (
  <figure className={`${isLoading ? 'flex-1 bg-secondary rounded-lg' : props.className} `}>
   <Image
    className={`${isLoading ? 'bg-slate-300 rounded-lg p-2' : props.className}`}
    src={props.src}
    title={props.title}
    alt={props.title}
    loading="eager"
    placeholder="empty"
    width={props.width}
    height={props.height}
    onLoad={() => setIsLoading(false)}
   />
  </figure>
 );
};

export { CustomPhoto };
