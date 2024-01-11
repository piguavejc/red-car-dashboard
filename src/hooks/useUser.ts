import { LoginModel, RegisterModel } from '@/mvc/models';
import { AxiosError, AxiosResponse } from 'axios';
import { LoginDto, ResponseDto } from '@/mvc/models/dto';
import { ServiceUser } from '@/mvc/services';
import { useState } from 'react';

const service: ServiceUser = ServiceUser.getService();

const useUser = () => {
 const [existError, setExistError] = useState<boolean>(false);
 const [messageError, setMessageError] = useState<string>('');

 const create = async (values: RegisterModel): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.create(values);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 const login = async (values: LoginModel): Promise<AxiosResponse<LoginDto> | undefined> => {
  try {
   return await service.login(values);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };
 return { existError, messageError, create, login };
};
export { useUser };
