import { UserController } from '@/mvc/controllers';
import { UserModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';
import { resposeApi } from '@/types';

class ServiceUser implements UserController {
 public create = async (user: UserModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.post<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/create/user`,
   this.getFormData(user),
  );
 };
 public getFormData = (user: UserModel): URLSearchParams => {
  const formData: URLSearchParams = new URLSearchParams();
  return formData;
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
