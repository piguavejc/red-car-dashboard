import { LoginModel, RegisterModel } from '@/mvc/models';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { statusDialog } from '@/types';
import { useModal } from './useModal';
import { useUser } from './useUser';
import { data } from '@/constants';

const { secctions } = data.screens.login;

const useRegisterController = (seccion: string) => {
 const router = useRouter();
 const session = useSession();
 const { create, existError, messageError } = useUser();
 const { modalSetting, handlerStatus } = useModal(false);
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const [count] = useState<LoginModel>({
  user: undefined,
  password: undefined,
 });
 const [register] = useState<RegisterModel>({
  password: undefined,
  cedula: undefined,
  email: undefined,
  names: undefined,
  user: undefined,
 });

 useEffect(() => {
  if (session.status === 'authenticated' && seccion === secctions.login) router.push('/dashboard');
  if (session.status === 'loading' && seccion === secctions.login) setIsLoading(true);
  if (session.status === 'unauthenticated' && seccion === secctions.login) setIsLoading(false);
 }, [session.status]);

 const handlerCreate = async (values: RegisterModel) => {
  setIsLoading(true);
  const rs = await create(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
 };

 const handlerLogin = async (values: LoginModel) => {
  setIsLoading(true);
  try {
   const rs = await signIn('credentials', {
    email: values.user,
    password: values.password,
    redirect: false,
   });
   if (rs?.ok) {
    router.push('/dashboard');
   }
  } catch (error) {
   //    console.log(error);
  }
  setIsLoading(false);
 };

 return {
  existError,
  messageError,
  isLoading,
  register,
  modalSetting,
  count,
  handlerCreate,
  handlerLogin,
 };
};
export { useRegisterController };
