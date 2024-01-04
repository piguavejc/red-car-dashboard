import { LoginModel, RegisterModel } from '@/mvc/models';
import { statusDialog } from '@/types';
import { useModal } from './useModal';
import { useUser } from './useUser';
import { useState } from 'react';

const useRegisterController = () => {
 const { create, login, existError, messageError } = useUser();
 const { modalSetting, handlerStatus } = useModal(false);
 const [register, setRegister] = useState<RegisterModel>({
  password: undefined,
  cedula: undefined,
  email: undefined,
  names: undefined,
  user: undefined,
 });
 const handlerCreate = async (values: RegisterModel) => {
  const rs = await create(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
 };
 const handlerLogin = async (values: LoginModel) => {
  const rs = await login(values);
  if (rs?.data.data.id_user) console.log('bien !!!');
 };
 return { existError, messageError, register, modalSetting, handlerCreate, handlerLogin };
};
export { useRegisterController };
