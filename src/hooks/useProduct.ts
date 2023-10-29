import { useEffect, useState } from 'react';
import { ProductModel } from '@/mvc/models';
import { ServiceProduct } from '@/mvc/services';
import { useDialog, useModal } from '.';
import { Item, Message, Search, resposeApi } from '@/types';
import { statusLoad } from '../constants/loading.const';
import { messageDialog, statusDialog, typesAction, typesStatusDialog } from '@/constants';

const service = ServiceProduct.getService();

const useProduct = (searchTarget: Search) => {
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
 const handlerDisable = (id: number, product: string) => {
  handlerAppear(product, typesAction.eliminate, messageDialog.product.disable);
  setTarget({ id, name: product });
 };

 /* handler to enable one product */
 const handlerEnable = (id: number, product: string) => {
  handlerAppear(product, typesAction.enable, messageDialog.product.enable);
  setTarget({ id, name: product });
 };

 /* handler to create a new category */
 const handlerSave = (values: ProductModel) => {
  if (!values.product) return;
  create(values);
 };

 /* handler to edit a new category */
 const handlerEdit = (values: ProductModel) => {
  if (!values.product) return;
  handlerAppear(values.product, typesAction.edit, messageDialog.product.edit);
  setProduct(values);
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
   await search(searchTarget);
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
  setProduct({
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
 };

 /* create */
 const create = async (values: ProductModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.product.create);
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
  setIsLoading(false);
  updateAll();
 };
 /* edit */
 const edit = async (values: ProductModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.product.edit);
  try {
   const rs = await service.edit(values);
   setResponse(rs.data);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  } catch (error) {
   console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
  updateAll();
 };

 /* enable */
 const enable = async (idProduct: number, product: string) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.product.enable);
  try {
   const rs = await service.enable(idProduct, product);
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
 /* disable */
 const disable = async (idProduct: number, product: string) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.product.disable);
  try {
   const rs = await service.disable(idProduct, product);
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
 /* search all */
 const search = async (search: Search) => {
  setIsLoadingSearch(true);
  try {
   const rs = await service.search(search);
   const data = rs.data.data.map((item) => ({
    id: item.idproduct,
    name: item.product,
    photo: item.photo,
   }));
   setProducts(data);
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
   id: item.idproduct,
   name: item.product,
   photo: item.photo,
  }));
  setDisabledProducts(data);
 };
 /* show all enable */
 const showAllEnable = async () => {
  const rs = await service.showEnable();
  const data = rs.data.data.map((item) => ({
   id: item.idproduct,
   name: item.product,
   photo: item.photo,
  }));
  setProducts(data);
 };
 /* eliminating a category */
 if (decisition && type === typesAction.eliminate && target?.id && target?.name) {
  disable(target?.id, target?.name);
  handlerHidde();
 }
 /* enabling a category */
 if (decisition && type === typesAction.enable && target?.id && target?.name) {
  enable(target?.id, target?.name);
  handlerHidde();
 }
 /* editing a category */
 if (decisition && type === typesAction.edit && product?.idproduct) {
  edit(product);
  handlerHidde();
  handlerHiddeEdition();
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
  isEnable,
  isEdition,
  isLoading,
  isLoadingSearch,
  product,
  messageLoad,
  products,
  modalSetting,
  disabledProducts,
  handlerSave,
  handlerEdit,
  handlerEnable,
  handlerDisable,
  handlerEdition,
  handlerRefresAll,
  handlerHiddeEnable,
  handlerHiddeEdition,
  handlerAppearEnable,
 };
};
export { useProduct };
