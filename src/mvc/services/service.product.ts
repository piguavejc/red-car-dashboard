import { ResponseDto, ProductDto } from '@/mvc/models/dto';
import { ProductController } from '@/mvc/controllers';
import { ProductModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';
import { Search } from '@/types';

class ServiceProduct implements ProductController {
 public create = async (
  product: ProductModel,
  token: string,
 ): Promise<AxiosResponse<ResponseDto>> => {
  return await this.http.post<ResponseDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/create/product`,
   this.getFormData(product),
   token,
  );
 };
 public showCategory = async (category: string): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/show/category/product?category=${category}`,
  );
 };
 public showLaboratory = async (
  category: string,
  laboratory: string,
 ): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/show/laboratory/product?category=${category}&laboratory=${laboratory}`,
  );
 };
 public edit = async (
  product: ProductModel,
  token: string,
 ): Promise<AxiosResponse<ResponseDto>> => {
  return await this.http.put<ResponseDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/edit/product`,
   this.getFormData(product),
   token,
  );
 };
 public enable = async (
  idProduct: number,
  product: string,
  token: string,
 ): Promise<AxiosResponse<ResponseDto>> => {
  return await this.http.put<ResponseDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/enable/product`,
   this.getSearchParams(idProduct, product),
   token,
  );
 };
 public disable = async (
  idProduct: number,
  product: string,
  token: string,
 ): Promise<AxiosResponse<ResponseDto>> => {
  return await this.http.put<ResponseDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/disable/product`,
   this.getSearchParams(idProduct, product),
   token,
  );
 };

 public showDisable = async (): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<{ data: ProductDto[] }>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/show/disable/product`,
  );
 };

 public showEnable = async (): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<{ data: ProductDto[] }>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/show/enable/product`,
  );
 };

 public searchCategory = async (
  product: string,
  category: string,
 ): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<{ data: ProductDto[] }>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/search/category/product?product=${product}&category=${category}`,
  );
 };

 public search = async (search: Search): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/search/product?search=${search.search}`,
  );
 };
 public searchLaboratory = async (
  category: string,
  laboratory: string,
  search: Search,
 ): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/search/laboratory/product?laboratory=${laboratory}&search=${search.search}&category=${category}`,
  );
 };
 public find = async (id: number): Promise<AxiosResponse<{ data: ProductDto }>> => {
  return await this.http.get<ProductDto>(
   `${process.env.NEXT_PUBLIC_BACKEND_URL}/find/product?id=${id}`,
  );
 };

 public getFormData = (product: ProductModel): FormData => {
  const formData: FormData = new FormData();
  if (product.id) formData.append('idProduct', product.id.toString());
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
