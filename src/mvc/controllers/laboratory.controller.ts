import { ResponseDto, LaboratoryDto } from '@/mvc/models/dto';
import { LaboratoryModel } from '@/mvc/models';
import { AxiosResponse } from 'axios';
import { Search } from '@/types';

interface LaboratoryController {
 showEnable: () => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 showDisable: () => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 find: (id: number) => Promise<AxiosResponse<{ data: LaboratoryDto }>>;
 edit: (laboratory: LaboratoryModel) => Promise<AxiosResponse<ResponseDto>>;
 create: (laboratory: LaboratoryModel) => Promise<AxiosResponse<ResponseDto>>;
 enable: (laboratory: LaboratoryModel) => Promise<AxiosResponse<ResponseDto>>;
 disable: (laboratory: LaboratoryModel) => Promise<AxiosResponse<ResponseDto>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 listCategory: (category: string) => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
}
export type { LaboratoryController };
