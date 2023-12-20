import { useState } from 'react';
import { LaboratoryModel } from '@/mvc/models';
import { ServiceLaboratory } from '@/mvc/services';
import { Search, resposeApi } from '@/types';
import { AxiosResponse } from 'axios';

const service: ServiceLaboratory = ServiceLaboratory.getService();
const useLaboratory = () => {
 const [existError, setExistError] = useState<boolean>(false);
 /* create laboratory */
 const create = async (values: LaboratoryModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.create(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };
 /* edit laboratory */
 const edit = async (values: LaboratoryModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.edit(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };
 /* disable laboratory */
 const disable = async (
  values: LaboratoryModel,
 ): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.disable(values);
  } catch (error) {
   // console.log(error);
   setExistError(true);
  }
  return undefined;
 };

 /* enable laboratory */
 const enable = async (values: LaboratoryModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.enable(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };

 /* search all laboratories */
 const search = async (
  search: Search,
 ): Promise<
  | AxiosResponse<
     {
      data: LaboratoryModel[];
     },
     any
    >
  | undefined
 > => {
  try {
   return await service.search(search);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };

 const find = async (
  id: number,
 ): Promise<
  | AxiosResponse<
     {
      data: LaboratoryModel;
     },
     any
    >
  | undefined
 > => {
  try {
   return await service.find(id);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };

 /* show all disable */
 const listDisableds = async (): Promise<
  | AxiosResponse<
     {
      data: LaboratoryModel[];
     },
     any
    >
  | undefined
 > => {
  try {
   return await service.showDisable();
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };

 /* show all enable */
 const listEnableds = async (): Promise<
  | AxiosResponse<
     {
      data: LaboratoryModel[];
     },
     any
    >
  | undefined
 > => {
  try {
   return await service.showEnable();
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };

 /* show all enable */
 const listCategory = async (
  category: string,
 ): Promise<
  | AxiosResponse<
     {
      data: LaboratoryModel[];
     },
     any
    >
  | undefined
 > => {
  try {
   return await service.listCategory(category);
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };
 return {
  edit,
  find,
  create,
  enable,
  search,
  disable,
  listEnableds,
  listCategory,
  listDisableds,
  existError,
 };
};
export { useLaboratory };
