import { ProductDto, ProductModel } from '@/mvc/models';
import { Search, resposeApi } from '@/types';
import { AxiosResponse } from 'axios';

interface ProductController {
 showEnable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showCategory: (category: string) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showDisable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 find: (id: number) => Promise<AxiosResponse<{ data: ProductDto }>>;
 edit: (product: ProductModel) => Promise<AxiosResponse<resposeApi>>;
 create: (product: ProductModel) => Promise<AxiosResponse<resposeApi>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 enable: (id: number, product: string) => Promise<AxiosResponse<resposeApi>>;
 disable: (id: number, product: string) => Promise<AxiosResponse<resposeApi>>;
}
export type { ProductController };
