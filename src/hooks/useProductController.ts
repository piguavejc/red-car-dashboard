import { Item, Search, statusDialog } from '@/types';
import { messageDialog, types } from '@/constants';
import { ProductDto } from '@/mvc/models/dto';
import { useSession } from 'next-auth/react';
import { ProductModel } from '@/mvc/models';
import { useEffect, useState } from 'react';
import { useProduct } from './useProduct';
import { useDialog, useModal } from '.';

const useProductController = (
 category: string,
 laboratory: string | undefined,
 searchTarget: Search,
) => {
 const session = useSession();
 const {
  edit,
  find,
  create,
  enable,
  search,
  disable,
  listEnableds,
  listDisableds,
  searchCategory,
  listCategories,
  listLaboratories,
  searchLaboratory,
  existError,
  messageError,
 } = useProduct();
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const [product, setProduct] = useState<ProductModel>({
  id: undefined,
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
 const [detail, setDetail] = useState<ProductDto>();
 const [products, setProducts] = useState<Item[]>([]);
 const [isEnable, setIsEnable] = useState<boolean>(false);
 const [isEdition, setEdition] = useState<boolean>(false);
 const [disabledProducts, setDisabledProducts] = useState<Item[]>([]);
 const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(true);
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
  if (category === 'Todos') handlerSearch(searchTarget);
  if (category !== 'Todos') {
   if (searchTarget.search === '') handlerListCategory(category);
   else handlerSearchCategory(searchTarget.search, category);
  }

  if (laboratory) {
   if (searchTarget.search !== '' && laboratory !== 'Todos') {
    handlerSearchLaboratory(category, laboratory, searchTarget);
    return;
   }
   if (laboratory !== 'Todos' && laboratory) handlerListLaboratory(category, laboratory);
   else handlerListCategory(category);
  }
 }, [searchTarget.search, category, laboratory]);

 /* update all category */
 const handlerUpdateAll = async () => {
  await handlerListEnableds();
  await handlerListDisableds();
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
  handlerAppear(product, types.action.eliminate, messageDialog.product.disable);
  setTarget({ id, name: product });
 };

 /* handler to enable one product */
 const handlerActionEnable = (id: number, product: string) => {
  handlerAppear(product, types.action.enable, messageDialog.product.enable);
  setTarget({ id, name: product });
 };

 /* handler to display the screen edition */
 const handlerShowEdit = (id: number, name: string) => {
  setEdition(!isEdition);
  console.log(name);
  handlerFind(id);
 };
 const handlerHiddeEdit = () => {
  setEdition(!isEdition);
  setProduct({
   id: undefined,
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

 const handlerDetail = async (id: number) => {
  await handlerFindDetail(id);
 };
 const handlerCloseDetail = () => {
  setDetail(undefined);
 };

 /* ------------------------------------------------------------------------------------------------------- */

 /* create */
 const handlerCreate = async (values: ProductModel) => {
  setIsLoading(true);
  const rs = await create(values, session.data?.user.token as string);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* edit */
 const handlerEdit = async (values: ProductModel) => {
  setIsLoading(true);
  const rs = await edit(values, session.data?.user.token as string);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerUpdateAll();
  handlerHiddeEdit();
 };

 /* enable */
 const handlerEnable = async (idProduct: number, product: string) => {
  const rs = await enable(idProduct, product, session.data?.user.token as string);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  handlerHidde();
  handlerUpdateAll();
 };
 /* disable */
 const handlerDisable = async (idProduct: number, product: string) => {
  const rs = await disable(idProduct, product, session.data?.user.token as string);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  handlerHidde();
  handlerUpdateAll();
 };
 /* search all */
 const handlerSearch = async (value: Search) => {
  setIsLoadingSearch(true);
  const rs = await search(value);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_product,
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
     id: data.id_product,
     category: data.category,
     laboratory: data.laboratory,
     barcode: data.barcode,
     product: data.product,
     features: data.features,
     summary: data.summary,
     dosage: data.dosage,
     cost: data.cost,
     pvp: data.pvp?.toString(),
     photo,
     idimage: data.id_image,
    });
  }
  setIsLoading(false);
 };

 const handlerFindDetail = async (id: number) => {
  setIsLoadingSearch(true);
  const rs = await find(id);
  if (rs?.data) {
   const data = rs.data.data;
   setDetail(data);
  }
  setIsLoadingSearch(false);
 };

 /* show all disable */
 const handlerListDisableds = async () => {
  setIsLoadingSearch(true);
  const rs = await listDisableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_product,
    name: item.product,
    photo: item.photo,
   }));
   setDisabledProducts(data);
  }
  setIsLoadingSearch(false);
 };
 /* show all enable */
 const handlerListEnableds = async () => {
  setIsLoadingSearch(true);
  if (products.length >= 0) setProducts([]);
  const rs = await listEnableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_product,
    name: item.product,
    photo: item.photo,
   }));
   setProducts(data);
  }
  setIsLoadingSearch(false);
 };

 /* show all enable */
 const handlerListCategory = async (category: string) => {
  setIsLoadingSearch(true);
  if (products.length >= 0) setProducts([]);
  const rs = await listCategories(category);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_product,
    name: item.product,
    photo: item.photo,
   }));
   setProducts(data);
  }
  setIsLoadingSearch(false);
 };

 /* show all enable */
 const handlerListLaboratory = async (category: string, laboratory: string) => {
  setIsLoadingSearch(true);
  if (products.length >= 0) setProducts([]);
  const rs = await listLaboratories(category, laboratory);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_product,
    name: item.product,
    photo: item.photo,
   }));
   setProducts(data);
  }
  setIsLoadingSearch(false);
 };

 /* show all enable */
 const handlerSearchCategory = async (product: string, category: string) => {
  setIsLoadingSearch(true);
  if (products.length >= 0) setProducts([]);
  const rs = await searchCategory(product, category);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_product,
    name: item.product,
    photo: item.photo,
   }));
   setProducts(data);
  }
  setIsLoadingSearch(false);
 };

 /* show all enable */
 const handlerSearchLaboratory = async (category: string, laboratory: string, search: Search) => {
  setIsLoadingSearch(true);
  if (products.length >= 0) setProducts([]);
  const rs = await searchLaboratory(category, laboratory, search);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_product,
    name: item.product,
    photo: item.photo,
   }));
   setProducts(data);
  }
  setIsLoadingSearch(false);
 };

 /* --------------------------------------------------------------------------------------------------------------------------------- */

 /* eliminating a category */
 if (decisition && type === types.action.eliminate && target?.id && target?.name) {
  handlerDisable(target?.id, target?.name);
 }
 /* enabling a category */
 if (decisition && type === types.action.enable && target?.id && target?.name) {
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
  detail,
  product,
  products,
  isEnable,
  isEdition,
  isLoading,
  existError,
  messageError,
  modalSetting,
  isLoadingSearch,
  disabledProducts,
  handlerEdit,
  handlerCreate,
  handlerDetail,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerOpenEnable,
  handlerCloseEnable,
  handlerCloseDetail,
  handlerActionEnable,
  handlerActionDisable,
 };
};
export { useProductController };
