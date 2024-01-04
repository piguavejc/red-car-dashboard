import { ResponseDto, CategoryDto } from '@/mvc/models/dto';
import { CategoryModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Search } from '@/types';
interface CategoryController {
 create: (category: CategoryModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 edit: (category: CategoryModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 enable: (category: CategoryModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 disable: (category: CategoryModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
 find: (id: number) => Promise<AxiosResponse<{ data: CategoryDto }>>;
 showDisable: () => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
 showEnable: () => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
}
export type { CategoryController };
