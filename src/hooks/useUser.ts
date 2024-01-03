import { LoginModel, RegisterModel } from '@/mvc/models';
import { AxiosError, AxiosResponse } from 'axios';
import { ResponseDto } from '@/mvc/models/dto';
import { ServiceUser } from '@/mvc/services';
import { useState } from 'react';

const service: ServiceUser = ServiceUser.getService();

const useUser = () => {
 const [existError, setExistError] = useState<boolean>(false);
 const [messageError, setMessageError] = useState<string>('');

 const create = async (values: RegisterModel): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.create(values);
  } catch (error: any) {
   const e: AxiosError<{ error: string }> = error;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 const login = async (values: LoginModel): Promise<AxiosResponse<RegisterModel> | undefined> => {
  try {
   return await service.login(values);
  } catch (error: any) {
   const e: AxiosError<{ error: string }> = error;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };
 return { existError, messageError, create, login };
};
export { useUser };
