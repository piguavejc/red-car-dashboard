import { ProductDto, ProductModel } from '@/mvc/models';
import { Search, resposeApi } from '@/types';
import { AxiosResponse } from 'axios';

interface ProductController {
 create: (product: ProductModel) => Promise<AxiosResponse<resposeApi>>;
 edit: (product: ProductModel) => Promise<AxiosResponse<resposeApi>>;
 enable: (id: number, product: string) => Promise<AxiosResponse<resposeApi>>;
 disable: (id: number, product: string) => Promise<AxiosResponse<resposeApi>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 find: (id: number) => Promise<AxiosResponse<{ data: ProductDto }>>;
 showDisable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showEnable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
}
export type { ProductController };
