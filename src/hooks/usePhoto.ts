import { useState } from 'react';

const usePhoto = () => {
 const [photo, setPhoto] = useState<string | undefined | null>();
 const [isOpen, setIsOpen] = useState<boolean>(false);

 const handlerImage = (urlImage: string | undefined | null) => {
  setPhoto(urlImage);
  setIsOpen(true);
 };
 const handlerHidde = () => {
  setIsOpen(false);
 };
 return { photo, isOpen, handlerHidde, handlerImage };
};
export { usePhoto };
