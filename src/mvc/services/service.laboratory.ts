import { LaboratoryController } from '@/mvc/controllers';
import { LaboratoryModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';
import { Search, resposeApi } from '@/types';

class ServiceLaboratory implements LaboratoryController {
 public create = async (laboratory: LaboratoryModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.post<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/create/laboratory`,
   this.getFormData(laboratory),
  );
 };
 public edit = async (laboratory: LaboratoryModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/edit/laboratory`,
   this.getFormData(laboratory),
  );
 };
 public enable = async (laboratory: LaboratoryModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/enable/laboratory`,
   this.getFormData(laboratory),
  );
 };
 public disable = async (laboratory: LaboratoryModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/disable/laboratory`,
   this.getFormData(laboratory),
  );
 };
 public showDisable = async (): Promise<AxiosResponse<{ data: LaboratoryModel[] }>> => {
  return await this.http.get<{ data: LaboratoryModel[] }>(
   `${process.env.API_RED_CAR_LOCAL}/show/disable/laboratory`,
  );
 };
 public showEnable = async (): Promise<AxiosResponse<{ data: LaboratoryModel[] }>> => {
  return await this.http.get<{ data: LaboratoryModel[] }>(
   `${process.env.API_RED_CAR_LOCAL}/show/enable/laboratory`,
  );
 };
 public search = async (search: Search): Promise<AxiosResponse<{ data: LaboratoryModel[] }>> => {
  return await this.http.get<LaboratoryModel>(
   `${process.env.API_RED_CAR_LOCAL}/search/laboratory?search=${search.search}`,
  );
 };
 public find = async (id: number): Promise<AxiosResponse<{ data: LaboratoryModel }>> => {
  return await this.http.get<LaboratoryModel>(
   `${process.env.API_RED_CAR_LOCAL}/find/laboratory?id=${id}`,
  );
 };

 public getFormData = (laboratory: LaboratoryModel): URLSearchParams => {
  const formData: URLSearchParams = new URLSearchParams();
  formData.append('idLaboratory', `${laboratory.idlaboratory}`);
  formData.append('laboratory', laboratory.laboratory as string);
  return formData;
 };

 public static getService = (): ServiceLaboratory => {
  if (this.service === undefined) this.service = new ServiceLaboratory();
  return this.service;
 };
 private constructor() {}

 private static service: ServiceLaboratory;
 private http: Http = new Http();
}
export { ServiceLaboratory };
