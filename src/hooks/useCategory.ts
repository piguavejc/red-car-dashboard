import { useState } from 'react';
import { CategoryDto, CategoryModel } from '@/mvc/models';
import { ServiceCategory } from '@/mvc/services';
import { Search, resposeApi } from '@/types';
import { AxiosResponse } from 'axios';

const service: ServiceCategory = ServiceCategory.getService();
const useCategory = () => {
 const [existError, setExistError] = useState<boolean>(false);

 /* create category */
 const create = async (values: CategoryModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.create(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };
 /* edit category */
 const edit = async (values: CategoryModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.edit(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };
 /* disable category */
 const disable = async (values: CategoryModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.disable(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
 };
 /* enable category */
 const enable = async (values: CategoryModel): Promise<AxiosResponse<resposeApi> | undefined> => {
  try {
   return await service.enable(values);
  } catch (error) {
   //  console.log(error);
   setExistError(true);
  }
  return undefined;
 };
 /* search all categories */
 const search = async (
  search: Search,
 ): Promise<
  | AxiosResponse<{
     data: CategoryDto[];
    }>
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
  | AxiosResponse<{
     data: CategoryDto;
    }>
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
  | AxiosResponse<{
     data: CategoryDto[];
    }>
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
  | AxiosResponse<{
     data: CategoryDto[];
    }>
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
 return {
  edit,
  find,
  create,
  search,
  enable,
  disable,
  listEnableds,
  listDisableds,
  existError,
 };
};
export { useCategory };
