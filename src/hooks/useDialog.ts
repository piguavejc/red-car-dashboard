import {} from '@/constants';
import { Message, statusAction } from '@/types';
import { useState } from 'react';

const useDialog = () => {
 const [isActivate, setIsActivate] = useState<boolean>(false);
 const [decisition, setDecisition] = useState<boolean>(false);
 const [type, setType] = useState<statusAction | undefined>();
 const [content, setContent] = useState<{ message: Message; name: string }>();

 const handlerVerify = (status: boolean) => {
  setDecisition(status);
  setIsActivate(false);
  return status;
 };

 const handlerAppear = (name: string, type: statusAction, message: string) => {
  setIsActivate(true);
  setContent({
   message: {
    title: 'Mensaje de verificacion',
    text: message,
   },
   name,
  });
  setType(type);
 };
 const handlerHidde = () => {
  setIsActivate(false);
  setDecisition(false);
 };

 const resetDialog = () => {
  setDecisition(false);
 };

 return {
  isActivate,
  decisition,
  content,
  type,
  handlerHidde,
  handlerAppear,
  handlerVerify,
  resetDialog,
 };
};
export { useDialog };
