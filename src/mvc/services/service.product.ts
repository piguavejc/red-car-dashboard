import { ProductController } from '@/mvc/controllers';
import { ProductDto, ProductModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';
import { Search, resposeApi } from '@/types';

class ServiceProduct implements ProductController {
 public create = async (product: ProductModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.post<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/create/product`,
   this.getFormData(product),
  );
 };
 public showCategory = async (category: string): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.API_RED_CAR_LOCAL}/show/category/product?category=${category}`,
  );
 };
 public showLaboratory = async (
  category: string,
  laboratory: string,
 ): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.API_RED_CAR_LOCAL}/show/laboratory/product?category=${category}&laboratory=${laboratory}`,
  );
 };
 public edit = async (product: ProductModel): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/edit/product`,
   this.getFormData(product),
  );
 };
 public enable = async (idProduct: number, product: string): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/enable/product`,
   this.getSearchParams(idProduct, product),
  );
 };
 public disable = async (
  idProduct: number,
  product: string,
 ): Promise<AxiosResponse<resposeApi>> => {
  return await this.http.put<resposeApi>(
   `${process.env.API_RED_CAR_LOCAL}/disable/product`,
   this.getSearchParams(idProduct, product),
  );
 };

 public showDisable = async (): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<{ data: ProductDto[] }>(
   `${process.env.API_RED_CAR_LOCAL}/show/disable/product`,
  );
 };

 public showEnable = async (): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<{ data: ProductDto[] }>(
   `${process.env.API_RED_CAR_LOCAL}/show/enable/product`,
  );
 };

 public searchCategory = async (
  product: string,
  category: string,
 ): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<{ data: ProductDto[] }>(
   `${process.env.API_RED_CAR_LOCAL}/search/category/product?product=${product}&category=${category}`,
  );
 };

 public search = async (search: Search): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.API_RED_CAR_LOCAL}/search/product?search=${search.search}`,
  );
 };
 public searchLaboratory = async (
  category: string,
  laboratory: string,
  search: Search,
 ): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.API_RED_CAR_LOCAL}/search/laboratory/product?laboratory=${laboratory}&search=${search.search}&category=${category}`,
  );
 };
 public find = async (id: number): Promise<AxiosResponse<{ data: ProductDto }>> => {
  return await this.http.get<ProductDto>(`${process.env.API_RED_CAR_LOCAL}/find/product?id=${id}`);
 };

 public getFormData = (product: ProductModel): FormData => {
  const formData: FormData = new FormData();
  if (product.idproduct) formData.append('idProduct', product.idproduct.toString());
  if (product.laboratory) formData.append('laboratory', product.laboratory);
  if (product.features) formData.append('features', product.features);
  if (product.category) formData.append('category', product.category);
  if (product.photo) formData.append('photo', product.photo as File);
  if (product.product) formData.append('product', product.product);
  if (product.barcode) formData.append('barcode', product.barcode);
  if (product.summary) formData.append('summary', product.summary);
  if (product.idimage) formData.append('idimage', product.idimage);
  if (product.dosage) formData.append('dosage', product.dosage);
  if (product.cost) formData.append('cost', product.cost);
  if (product.pvp) formData.append('pvp', product.pvp);
  return formData;
 };

 public getSearchParams = (id: number, product: string): URLSearchParams => {
  const formData: URLSearchParams = new URLSearchParams();
  formData.append('idProduct', `${id}`);
  formData.append('product', product);
  return formData;
 };

 public static getService = (): ServiceProduct => {
  if (this.service === undefined) this.service = new ServiceProduct();
  return this.service;
 };
 private constructor() {}

 private static service: ServiceProduct;
 private http: Http = new Http();
}
export { ServiceProduct };
