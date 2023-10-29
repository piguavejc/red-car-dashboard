import { CategoryController } from '@/mvc/controllers';
import { CategoryDto, CategoryModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';
import { Search, resposeApi } from '@/types';

class ServiceCategory implements CategoryController {
 public create = async (category: CategoryModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.post<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/create/category`,
   this.getFormData(category),
  );
 };
 public edit = async (category: CategoryModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/edit/category`,
   this.getFormData(category),
  );
 };
 public enable = async (category: CategoryModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/enable/category`,
   this.getURLSearchParams(category),
  );
 };
 public disable = async (category: CategoryModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/disable/category`,
   this.getURLSearchParams(category),
  );
 };

 public showDisable = async (): Promise<AxiosResponse<{ data: CategoryDto[] }>> => {
  return await this.http.get<{ data: CategoryDto[] }>(
   `${process.env.API_RED_CAR_LOCAL}/show/disable/category`,
  );
 };

 public showEnable = async (): Promise<AxiosResponse<{ data: CategoryDto[] }>> => {
  return await this.http.get<{ data: CategoryDto[] }>(
   `${process.env.API_RED_CAR_LOCAL}/show/enable/category`,
  );
 };

 public search = async (search: Search): Promise<AxiosResponse<{ data: CategoryDto[] }>> => {
  return await this.http.get<CategoryDto>(
   `${process.env.API_RED_CAR_LOCAL}/search/category?search=${search.search}`,
  );
 };

 public find = async (id: number): Promise<AxiosResponse<{ data: CategoryDto }>> => {
  return await this.http.get<CategoryDto>(
   `${process.env.API_RED_CAR_LOCAL}/find/category?id=${id}`,
  );
 };

 public getFormData = (category: CategoryModel): FormData => {
  const formData: FormData = new FormData();
  if (category.idcategory) formData.append('idCategory', `${category.idcategory}`);
  if (category.category) formData.append('category', category.category as string);
  if (category.photo) formData.append('photo', category.photo as File);
  if (category.idphoto) formData.append('idphoto', category.idphoto);
  return formData;
 };

 public getURLSearchParams = (category: CategoryModel): URLSearchParams => {
  const formData: URLSearchParams = new URLSearchParams();
  if (category.idcategory) formData.append('idCategory', `${category.idcategory}`);
  if (category.category) formData.append('category', category.category as string);
  return formData;
 };

 public static getService = (): ServiceCategory => {
  if (this.service === undefined) this.service = new ServiceCategory();
  return this.service;
 };
 private constructor() {}

 private static service: ServiceCategory;
 private http: Http = new Http();
}
export { ServiceCategory };
