import { LaboratoryModel } from '@/mvc/models';
import { Search, resposeApi } from '@/types';
import { AxiosResponse } from 'axios';

interface LaboratoryController {
 create: (laboratory: LaboratoryModel) => Promise<AxiosResponse<resposeApi>>;
 edit: (laboratory: LaboratoryModel) => Promise<AxiosResponse<resposeApi>>;
 enable: (laboratory: LaboratoryModel) => Promise<AxiosResponse<resposeApi>>;
 disable: (laboratory: LaboratoryModel) => Promise<AxiosResponse<resposeApi>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: LaboratoryModel[] }>>;
 find: (id: number) => Promise<AxiosResponse<{ data: LaboratoryModel }>>;
 showDisable: () => Promise<AxiosResponse<{ data: LaboratoryModel[] }>>;
 showEnable: () => Promise<AxiosResponse<{ data: LaboratoryModel[] }>>;
}
export type { LaboratoryController };
