import { CategoryDto, CategoryModel } from '@/mvc/models';
import { Search, resposeApi } from '@/types';
import { AxiosResponse } from 'axios';
interface CategoryController {
 create: (category: CategoryModel) => Promise<AxiosResponse<resposeApi>>;
 edit: (category: CategoryModel) => Promise<AxiosResponse<resposeApi>>;
 enable: (category: CategoryModel) => Promise<AxiosResponse<resposeApi>>;
 disable: (category: CategoryModel) => Promise<AxiosResponse<resposeApi>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
 find: (id: number) => Promise<AxiosResponse<{ data: CategoryDto }>>;
 showDisable: () => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
 showEnable: () => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
}
export type { CategoryController };
