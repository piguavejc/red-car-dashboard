'use client';
import { useState } from 'react';

const usePoster = () => {
 const [urlImage, setUrlImage] = useState<string | undefined>();

 const handlerPoster = (value: File) => {
  const reader = new FileReader();
  reader.readAsDataURL(value);
  reader.onload = () => {
   const result = reader.result as string;
   setUrlImage(result);
  };
 };
 return { urlImage, handlerPoster };
};
export { usePoster };
