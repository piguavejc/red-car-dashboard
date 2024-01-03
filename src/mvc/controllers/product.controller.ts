import { ResponseDto, ProductDto } from '@/mvc/models/dto';
import { ProductModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Search } from '@/types';

interface ProductController {
 showEnable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showDisable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 find: (id: number) => Promise<AxiosResponse<{ data: ProductDto }>>;
 edit: (product: ProductModel) => Promise<AxiosResponse<ResponseDto>>;
 create: (product: ProductModel) => Promise<AxiosResponse<ResponseDto>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 searchLaboratory: (
  category: string,
  laboratory: string,
  search: Search,
 ) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 enable: (id: number, product: string) => Promise<AxiosResponse<ResponseDto>>;
 disable: (id: number, product: string) => Promise<AxiosResponse<ResponseDto>>;
 showCategory: (category: string) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 searchCategory: (
  product: string,
  category: string,
 ) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showLaboratory: (
  category: string,
  laboratory: string,
 ) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
}
export type { ProductController };
