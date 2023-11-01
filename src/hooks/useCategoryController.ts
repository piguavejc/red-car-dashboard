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
import { Message, resposeApi, Item, Search } from '@/types';
import { useCategory } from './useCategory';

const useCategoryController = (searchTarget?: Search) => {
 const { edit, find, create, search, enable, disable, listEnableds, listDisableds, existError } =
  useCategory();
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
  handlerUpdateAll();
 }, []);

 /* hanlder to update all category information */
 const handlerRefresAll = () => {
  handlerUpdateAll();
 };

 /* show all disabled */
 const handlerOpenEnable = () => {
  setIsEnable(true);
 };
 /* hidde  all disabled */
 const handlerCloseEnable = () => {
  setIsEnable(false);
 };

 /* handler to disable one category */
 const handlerActionEnable = (id: number, category: string) => {
  handlerAppear(category, typesAction.eliminate, messageDialog.category.disable);
  setCategory({ idcategory: id, category });
 };

 /* handler to enable one category */
 const handlerActionDisable = (id: number, category: string) => {
  handlerAppear(category, typesAction.enable, messageDialog.category.enable);
  setCategory({ idcategory: id, category });
 };

 const handlerHiddeEdit = () => {
  setEdition(false);
 };

 /* handler to display the screen edition */
 const handlerShowEdit = (id: number, name: string) => {
  setEdition(!isEdition);
  handlerFind(id);
 };

 /* update all category */
 const handlerUpdateAll = () => {
  handlerListEnableds();
  handlerListDisableds();
 };

 /* ------------------------------------------------------------------------------------------------ */

 /* create category */
 const handlerCreate = async (values: CategoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.category.create);
  const rs = await create(values);
  if (rs?.data) {
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  }
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* edit category */
 const handlerEdit = async (values: CategoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.category.edit);
  const rs = await edit(values);
  if (rs?.data) {
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  }
  setIsLoading(false);
 };
 /* disable category */
 const handlerDisable = async (values: CategoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.category.disable);
  const rs = await disable(values);
  if (rs?.data) {
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  }
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* enable category */
 const handlerEnable = async (values: CategoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.category.enable);
  const rs = await enable(values);
  if (rs?.data) {
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  }
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* search all categories */
 const handlerSearch = async (value: Search) => {
  setIsLoadingSearch(true);
  const rs = await search(value);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.idcategory,
    name: item.category,
    photo: item.photo,
   }));
   setCategories(data);
  }

  setIsLoadingSearch(false);
 };

 const handlerFind = async (id: number) => {
  setIsLoading(true);
  const rs = await find(id);
  if (rs?.data) {
   const blob = await (await fetch(rs.data.data.photo!)).blob();
   const photo: File = new File([blob], 'foto', { type: blob.type });
   const data = rs.data.data;
   setCategory({
    idcategory: data.idcategory,
    category: data.category,
    photo,
    idphoto: data.idphoto,
   });
  }
  setIsLoading(false);
 };

 /* show all disable */
 const handlerListDisableds = async () => {
  const rs = await listDisableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.idcategory,
    name: item.category,
    photo: item.photo,
   }));
   setDisabledCategories(data);
  }
 };
 /* show all enable */
 const handlerListEnableds = async () => {
  const rs = await listEnableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.idcategory,
    name: item.category,
    photo: item.photo,
   }));
   setCategories(data);
  }
 };

 /* ------------------------------------------------------------------------------------------------ */

 /* eliminating a category */
 if (decisition && type === typesAction.eliminate && category?.idcategory) {
  disable(category);
 }
 /* enabling a category */
 if (decisition && type === typesAction.enable && category?.idcategory) {
  enable(category);
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
  isEdition,
  isLoading,
  categories,
  messageLoad,
  modalSetting,
  isLoadingSearch,
  disabledCategories,
  handlerEdit,
  handlerCreate,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerOpenEnable,
  handlerCloseEnable,
  handlerActionEnable,
  handlerActionDisable,
 };
};
export { useCategoryController };
