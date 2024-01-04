import { UserController } from '@/mvc/controllers';
import { LoginDto, ResponseDto } from '@/mvc/models/dto';
import { LoginModel, RegisterModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';
class ServiceUser implements UserController {
 public create = async (user: RegisterModel): Promise<AxiosResponse<ResponseDto>> => {
  return await this.http.post<ResponseDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
   this.getFormData(user),
  );
 };
 public login = async (user: LoginModel): Promise<AxiosResponse<LoginDto>> => {
  return await this.http.post<LoginDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
   this.getFormDataLogin(user),
  );
 };
 public getFormData = (user: RegisterModel): URLSearchParams => {
  const data: URLSearchParams = new URLSearchParams();
  if (user.email) data.append('email', user.email);
  if (user.user) data.append('username', user.user);
  if (user.cedula) data.append('cedula', user.cedula);
  if (user.names) data.append('fullNames', user.names);
  if (user.password) data.append('password', user.password);
  return data;
 };

 public getFormDataLogin = (user: LoginModel): URLSearchParams => {
  const data: URLSearchParams = new URLSearchParams();
  if (user.user) data.append('username', user.user);
  if (user.password) data.append('password', user.password);
  return data;
 };

 public static getService = (): ServiceUser => {
  if (this.service === undefined) this.service = new ServiceUser();
  return this.service;
 };
 private constructor() {}

 private static service: ServiceUser;
 private http: Http = new Http();
}
export { ServiceUser };
