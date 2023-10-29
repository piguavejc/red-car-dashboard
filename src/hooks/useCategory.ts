import { useEffect, useState } from 'react';
import { CategoryModel } from '@/mvc/models';
import { useDialog, useModal, usePoster } from '.';
import {
 messageDialog,
 statusDialog,
 statusLoad,
 typesAction,
 typesStatusDialog,
} from '@/constants';
import { ServiceCategory } from '@/mvc/services';
import { Message, resposeApi, Item, Search } from '@/types';
import { AxiosError } from 'axios';

const service: ServiceCategory = ServiceCategory.getService();
const useCategory = (searchTarget?: Search) => {
 const [category, setCategory] = useState<CategoryModel>({
  idcategory: undefined,
  category: undefined,
  photo: undefined,
 });
 const [messageLoad, setMessageLoad] = useState<Message>();
 const {} = usePoster(category.photo);
 const [response, setResponse] = useState<resposeApi>();
 const [categories, setCategories] = useState<Item[]>([]);
 const [disabledCategories, setDisabledCategories] = useState<Item[]>([]);
 const [isEdition, setEdition] = useState<boolean>(false);
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
 const [isEnable, setIsEnable] = useState<boolean>(false);
 const {
  type,
  content,
  isActivate,
  decisition,
  resetDialog,
  handlerHidde,
  handlerAppear,
  handlerVerify,
 } = useDialog();

 const { modalSetting, handlerStatus } = useModal(false);

 useEffect(() => {
  if (searchTarget) search(searchTarget);
 }, [searchTarget?.search]);

 useEffect(() => {
  updateAll();
 }, []);

 /* hanlder to update all category information */
 const handlerRefresAll = () => {
  updateAll();
 };

 /* show all disabled */
 const handlerAppearEnable = () => {
  setIsEnable(true);
 };
 /* hidde  all disabled */
 const handlerHiddeEnable = () => {
  setIsEnable(false);
 };

 /* handler to disable one category */
 const handlerDisable = (id: number, category: string) => {
  handlerAppear(category, typesAction.eliminate, messageDialog.category.disable);
  setCategory({ idcategory: id, category });
 };

 /* handler to enable one category */
 const handlerEnable = (id: number, category: string) => {
  handlerAppear(category, typesAction.enable, messageDialog.category.enable);
  setCategory({ idcategory: id, category });
 };

 /* handler to create a new category */
 const handlerSave = (values: CategoryModel) => {
  if (!values.category) return;
  create(values);
 };

 /* handler to edit a new category */
 const handlerEdit = (values: CategoryModel) => {
  if (!values.category) return;
  handlerAppear(values.category, typesAction.edit, messageDialog.category.edit);
  setCategory(values);
 };

 /* handler to display the screen edition */
 const handlerEdition = (id: number, name: string) => {
  setEdition(!isEdition);
  find(id);
 };
 const handlerHiddeEdition = () => {
  setEdition(!isEdition);
  updateAll();
 };

 /* update all category */
 const updateAll = async () => {
  setIsLoading(true);
  setMessageLoad(statusLoad.loadData);
  try {
   await showAllDisable();
   await showAllEnable();
   resetAll();
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
 };

 /* reset all category */
 const resetAll = async () => {
  setResponse(undefined);
  setCategory({
   idcategory: undefined,
   category: undefined,
   photo: undefined,
  });
 };

 /* create category */
 const create = async (values: CategoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.category.create);
  try {
   const rs = await service.create(values);
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  updateAll();
  setIsLoading(false);
 };
 /* edit category */
 const edit = async (values: CategoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.category.edit);
  try {
   const rs = await service.edit(values);
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
 };
 /* disable category */
 const disable = async (values: CategoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.category.disable);
  try {
   const rs = await service.disable(values);
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
  updateAll();
 };
 /* enable category */
 const enable = async (values: CategoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.category.enable);
  try {
   const rs = await service.enable(values);
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
  updateAll();
 };
 /* search all categories */
 const search = async (search: Search) => {
  setIsLoadingSearch(true);
  try {
   const rs = await service.search(search);
   const data = rs.data.data.map((item) => ({
    id: item.idcategory,
    name: item.category,
    photo: item.photo,
   }));
   setCategories(data);
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoadingSearch(false);
 };

 const find = async (id: number) => {
  setIsLoading(true);
  try {
   const rs = await service.find(id);
   const blob = await (await fetch(rs.data.data.photo!)).blob();
   const photo: File = new File([blob], 'foto', { type: blob.type });
   const data = rs.data.data;
   if (data)
    setCategory({
     idcategory: data.idcategory,
     category: data.category,
     photo,
     idphoto: data.idphoto,
    });
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
 };

 /* show all disable */
 const showAllDisable = async () => {
  const rs = await service.showDisable();
  const data = rs.data.data.map((item) => ({
   id: item.idcategory,
   name: item.category,
   photo: item.photo,
  }));
  if (data) setDisabledCategories(data);
 };
 /* show all enable */
 const showAllEnable = async () => {
  const rs = await service.showEnable();
  const data = rs.data.data.map((item) => ({
   id: item.idcategory,
   name: item.category,
   photo: item.photo,
  }));
  if (data) setCategories(data);
 };

 /* eliminating a category */
 if (decisition && type === typesAction.eliminate && category?.idcategory) {
  disable(category);
  handlerHidde();
 }
 /* enabling a category */
 if (decisition && type === typesAction.enable && category?.idcategory) {
  enable(category);
  handlerHidde();
 }
 /* editing a category */
 if (decisition && type === typesAction.edit && category?.idcategory) {
  edit(category);
  handlerHidde();
  handlerHiddeEdition();
 }
 const dialog = Object.freeze({
  isActivate,
  content,
  handlerAppear,
  handlerVerify,
  handlerHidde,
  resetAll: resetDialog,
 });
 return {
  dialog,
  category,
  isEnable,
  response,
  isEdition,
  isLoading,
  categories,
  messageLoad,
  modalSetting,
  isLoadingSearch,
  disabledCategories,
  handlerSave,
  handlerEdit,
  handlerEnable,
  handlerEdition,
  handlerDisable,
  handlerRefresAll,
  handlerHiddeEnable,
  handlerHiddeEdition,
  handlerAppearEnable,
 };
};
export { useCategory };
