import { useEffect, useState } from 'react';
import { ProductModel } from '@/mvc/models';
import { useDialog, useModal } from '.';
import { Item, Message, Search, resposeApi } from '@/types';
import { statusLoad } from '../constants/loading.const';
import { messageDialog, statusDialog, typesAction, typesStatusDialog } from '@/constants';
import { useProduct } from './useProduct';

const useProductController = (searchTarget: Search) => {
 const { edit, find, create, enable, search, disable, listEnableds, listDisableds, existError } =
  useProduct();
 const [response, setResponse] = useState<resposeApi>();
 const [messageLoad, setMessageLoad] = useState<Message>();
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [product, setProduct] = useState<ProductModel>({
  idproduct: undefined,
  photo: undefined,
  category: undefined,
  laboratory: undefined,
  barcode: undefined,
  product: undefined,
  features: undefined,
  summary: undefined,
  dosage: undefined,
  cost: undefined,
  pvp: undefined,
 });
 const [target, setTarget] = useState<Item>();
 const [products, setProducts] = useState<Item[]>([]);
 const [isEnable, setIsEnable] = useState<boolean>(false);
 const [isEdition, setEdition] = useState<boolean>(false);
 const [disabledProducts, setDisabledProducts] = useState<Item[]>([]);
 const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
 const { modalSetting, handlerStatus } = useModal(false);
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

 useEffect(() => {
  search(searchTarget);
 }, [searchTarget.search]);

 useEffect(() => {
  handlerUpdateAll();
 }, []);

 /* update all category */
 const handlerUpdateAll = async () => {
  handlerListEnableds();
  handlerListDisableds();
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
 const handlerActionDisable = (id: number, product: string) => {
  handlerAppear(product, typesAction.eliminate, messageDialog.product.disable);
  setTarget({ id, name: product });
 };

 /* handler to enable one product */
 const handlerActionEnable = (id: number, product: string) => {
  handlerAppear(product, typesAction.enable, messageDialog.product.enable);
  setTarget({ id, name: product });
 };

 /* handler to display the screen edition */
 const handlerShowEdit = (id: number, name: string) => {
  setEdition(!isEdition);
  handlerFind(id);
 };
 const handlerHiddeEdit = () => {
  setEdition(!isEdition);
  handlerUpdateAll();
 };

 /* ------------------------------------------------------------------------------------------------------- */
 /* create */
 const handlerCreate = async (values: ProductModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.product.create);
  const rs = await create(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* edit */
 const handlerEdit = async (values: ProductModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.product.edit);

  const rs = await edit(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerUpdateAll();
 };

 /* enable */
 const handlerEnable = async (idProduct: number, product: string) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.product.enable);
  const rs = await enable(idProduct, product);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* disable */
 const handlerDisable = async (idProduct: number, product: string) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.product.disable);
  const rs = await disable(idProduct, product);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);

  setIsLoading(false);
  handlerUpdateAll();
 };
 /* search all */
 const handlerSearch = async (value: Search) => {
  setIsLoadingSearch(true);
  const rs = await search(value);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.idproduct,
    name: item.product,
    photo: item.photo,
   }));
   setProducts(data);
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
   if (data)
    setProduct({
     idproduct: data.idproduct,
     category: data.category,
     laboratory: data.laboratory,
     barcode: data.barcode,
     product: data.product,
     features: data.features,
     summary: data.summary,
     dosage: data.dosage,
     cost: data.cost,
     pvp: data.pvp,
     photo,
     idimage: data.idimage,
    });
  }
  setIsLoading(false);
 };

 /* show all disable */
 const handlerListDisableds = async () => {
  const rs = await listDisableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.idproduct,
    name: item.product,
    photo: item.photo,
   }));
   setDisabledProducts(data);
  }
 };
 /* show all enable */
 const handlerListEnableds = async () => {
  const rs = await listEnableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.idproduct,
    name: item.product,
    photo: item.photo,
   }));
   setProducts(data);
  }
 };
 /* eliminating a category */
 if (decisition && type === typesAction.eliminate && target?.id && target?.name) {
  handlerDisable(target?.id, target?.name);
 }
 /* enabling a category */
 if (decisition && type === typesAction.enable && target?.id && target?.name) {
  handlerEnable(target?.id, target?.name);
 }

 const dialog = Object.freeze({
  content,
  isActivate,
  handlerHidde,
  handlerAppear,
  handlerVerify,
  resetAll: resetDialog,
 });
 return {
  dialog,
  product,
  products,
  isEnable,
  isEdition,
  isLoading,
  messageLoad,
  modalSetting,
  isLoadingSearch,
  disabledProducts,
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
export { useProductController };
