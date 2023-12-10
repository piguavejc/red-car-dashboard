import { useState } from 'react';
import { ModalSetting, statusDialog } from '@/types';

const useModal = (isOpen: boolean) => {
 const [isActivate, setIsActivate] = useState<boolean>(isOpen);
 const [message, setMessage] = useState<string | undefined>(undefined);
 const [type, setType] = useState<statusDialog | undefined>(undefined);

 const handlerHidde = () => {
  setIsActivate(false);
 };
 const handlerAppear = () => {
  setIsActivate(true);
 };
 const handlerStatus = (status: boolean, type: statusDialog, message: string) => {
  setIsActivate(status);
  setType(type);
  setMessage(message);
 };

 const modalSetting: ModalSetting = {
  type,
  message,
  isActivate,
  handlerAppear,
  handlerHidde,
  handlerStatus,
 };
 return { handlerStatus, modalSetting };
};
export { useModal };
