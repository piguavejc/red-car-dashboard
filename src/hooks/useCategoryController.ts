import { useEffect, useState } from 'react';
import { CategoryDto, CategoryModel } from '@/mvc/models';
import { useDialog, useModal } from '.';
import { messageDialog, statusDialog, typesAction } from '@/constants';
import { Item, Search } from '@/types';
import { useCategory } from './useCategory';

const useCategoryController = (searchTarget?: Search) => {
 const { edit, find, create, search, enable, disable, listEnableds, listDisableds, existError } =
  useCategory();
 const [category, setCategory] = useState<CategoryModel>({
  idcategory: undefined,
  category: undefined,
  photo: undefined,
 });
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
 const [detail, setDetail] = useState<CategoryDto>();
 const [target, setTarget] = useState<CategoryDto>();
 const { modalSetting, handlerStatus } = useModal(false);
 const [categories, setCategories] = useState<Item[]>([]);
 const [isEnable, setIsEnable] = useState<boolean>(false);
 const [isEdition, setEdition] = useState<boolean>(false);
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
 const [disabledCategories, setDisabledCategories] = useState<Item[]>([]);

 useEffect(() => {
  if (searchTarget) handlerSearch(searchTarget);
 }, [searchTarget?.search]);

 useEffect(() => {
  handlerUpdateAll();
 }, []);

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
  handlerAppear(category, typesAction.enable, messageDialog.category.enable);
  setCategory({ idcategory: id, category });
 };

 /* handler to enable one category */
 const handlerActionDisable = (id: number, category: string) => {
  handlerAppear(category, typesAction.eliminate, messageDialog.category.disable);
  setCategory({ idcategory: id, category });
 };

 const handlerHiddeEdit = () => {
  setEdition(false);
  setCategory({
   idcategory: undefined,
   category: undefined,
   photo: undefined,
  });
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
  const rs = await create(values);
  if (rs?.data) {
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  }
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* edit category */
 const handlerEdit = async (values: CategoryModel) => {
  setIsLoading(true);
  const rs = await edit(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerHiddeEdit();
 };
 /* disable category */
 const handlerDisable = async (values: CategoryModel) => {
  const rs = await disable(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  handlerHidde();
  handlerUpdateAll();
 };
 /* enable category */
 const handlerEnable = async (values: CategoryModel) => {
  const rs = await enable(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  handlerHidde();
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

 const handlerFindDetail = async (id: number) => {
  setIsLoadingSearch(true);
  const rs = await find(id);
  if (rs?.data) {
   const data = rs.data.data;
   setTarget(data);
  }
  setIsLoadingSearch(false);
 };
 /* show all disable */
 const handlerListDisableds = async () => {
  setIsLoadingSearch(true);
  const rs = await listDisableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.idcategory,
    name: item.category,
    photo: item.photo,
   }));
   setDisabledCategories(data);
  }
  setIsLoadingSearch(false);
 };
 /* show all enable */
 const handlerListEnableds = async () => {
  setIsLoadingSearch(true);
  const rs = await listEnableds();
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
 const handlerDeatil = async (id: number) => {
  await handlerFindDetail(id);
  setDetail(target);
 };
 const handlerCloseDetail = () => {
  setDetail(undefined);
 };

 /* ------------------------------------------------------------------------------------------------ */

 /* eliminating a category */
 if (decisition && type === typesAction.eliminate && category?.idcategory) {
  handlerDisable(category);
 }
 /* enabling a category */
 if (decisition && type === typesAction.enable && category?.idcategory) {
  handlerEnable(category);
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
  detail,
  category,
  isEnable,
  isEdition,
  isLoading,
  categories,
  existError,
  modalSetting,
  isLoadingSearch,
  disabledCategories,
  handlerEdit,
  handlerCreate,
  handlerDeatil,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerOpenEnable,
  handlerCloseDetail,
  handlerCloseEnable,
  handlerActionEnable,
  handlerActionDisable,
 };
};
export { useCategoryController };
