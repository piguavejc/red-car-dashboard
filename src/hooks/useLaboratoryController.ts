import { useEffect, useState } from 'react';
import { LaboratoryModel } from '@/mvc/models';
import { useDialog, useModal } from '.';
import {
 messageDialog,
 statusDialog,
 statusLoad,
 typesAction,
 typesStatusDialog,
} from '@/constants';
import { Item, Message, Search } from '@/types';
import { useLaboratory } from './useLaboratory';

const useLaboratoryController = (targetSearch?: Search) => {
 const { edit, find, create, enable, search, disable, listEnableds, listDisableds, existError } =
  useLaboratory();
 const [laboratory, setLaboratory] = useState<LaboratoryModel>({
  idlaboratory: undefined,
  laboratory: undefined,
 });
 const [messageLoad, setMessageLoad] = useState<Message>();
 const [laboratories, setLaboratories] = useState<Item[]>([]);
 const [disabledLaboratories, setDisabledLaboratories] = useState<Item[]>([]);
 const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
 const [isLoading, setIsLoading] = useState<boolean>(false);
 const [isEdition, setEdition] = useState<boolean>(false);
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
  if (targetSearch) handlerSearch(targetSearch);
 }, [targetSearch?.search]);

 useEffect(() => {
  handlerUpdateAll();
 }, []);

 /* update all laboratory */
 const handlerUpdateAll = () => {
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
 /* handler to enable one laboratory */
 const handlerActionEnable = (id: number, laboratory: string) => {
  handlerAppear(laboratory, typesAction.enable, messageDialog.laboratory.enable);
  setLaboratory({ idlaboratory: id, laboratory });
 };

 /* handler to disable one laboratory */
 const handlerActionDisable = (id: number, laboratory: string) => {
  handlerAppear(laboratory, typesAction.eliminate, messageDialog.laboratory.disable);
  setLaboratory({ idlaboratory: id, laboratory });
 };

 const handlerHiddeEdit = () => {
  setEdition(false);
 };

 /* handler to display the screen edition */
 const handlerShowEdit = (id: number, name: string) => {
  setEdition(!isEdition);
  handlerFind(id);
 };

 /* ----------------------------------------------------------------------------------------------------------------------- */

 /* create laboratory */
 const handlerCreate = async (values: LaboratoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.laboratory.create);
  try {
   const rs = await create(values);
   if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* edit laboratory */
 const handlerEdit = async (values: LaboratoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.laboratory.edit);
  const rs = await edit(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerUpdateAll();
  handlerHiddeEdit();
 };

 /* disable laboratory */
 const handlerDisable = async (values: LaboratoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.laboratory.disable);
  const rs = await disable(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
 };

 /* enable laboratory */
 const handlerEnable = async (values: LaboratoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.laboratory.enable);
  const rs = await enable(values);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerUpdateAll();
 };

 /* search all laboratories */
 const handlerSearch = async (value: Search) => {
  setIsLoadingSearch(true);
  try {
   const rs = await search(value);
   if (rs?.data) {
    const data = rs.data.data.map((item) => ({ id: item.idlaboratory, name: item.laboratory }));
    setLaboratories(data);
   }
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

 const handlerFind = async (id: number) => {
  setIsLoading(true);
  const rs = await find(id);
  if (rs?.data) {
   const data = rs.data.data;
   setLaboratory(data);
  }
  setIsLoading(false);
 };

 /* show all disable */
 const handlerListDisableds = async () => {
  setIsLoadingSearch(true);
  const rs = await listDisableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({ id: item.idlaboratory, name: item.laboratory }));
   setDisabledLaboratories(data);
  }
  setIsLoadingSearch(false);
 };

 /* show all enable */
 const handlerListEnableds = async () => {
  setIsLoadingSearch(true);
  const rs = await listEnableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({ id: item.idlaboratory, name: item.laboratory }));
   setLaboratories(data);
  }
  setIsLoadingSearch(false);
 };

 /* ----------------------------------------------------------------------------------------------------------------------- */

 /* eliminating a laboratory */
 if (decisition && type === typesAction.eliminate && laboratory?.idlaboratory) {
  handlerEnable(laboratory);
 }
 /* enabling a laboratory */
 if (decisition && type === typesAction.enable && laboratory?.idlaboratory) {
  handlerDisable(laboratory);
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
  isLoading,
  isEdition,
  laboratory,
  messageLoad,
  laboratories,
  modalSetting,
  isLoadingSearch,
  disabledLaboratories,
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
export { useLaboratoryController };
