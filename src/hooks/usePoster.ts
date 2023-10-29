import { useEffect, useState } from 'react';

const usePoster = (value: File | undefined) => {
 const [urlImage, setUrlImage] = useState<string | undefined>();
 useEffect(() => {
  if (!value) return;
  const reader = new FileReader();
  reader.readAsDataURL(value);
  reader.onload = () => {
   const result = reader.result as string;
   setUrlImage(result);
  };
 }, [value]);
 return { urlImage };
};
export { usePoster };
