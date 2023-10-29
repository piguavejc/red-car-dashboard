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
import { ServiceLaboratory } from '@/mvc/services';
import { Item, Message, Search } from '@/types';

const service: ServiceLaboratory = ServiceLaboratory.getService();

const useLaboratory = (targetSearch?: Search) => {
 const [laboratory, setLaboratory] = useState<LaboratoryModel>({
  idlaboratory: undefined,
  laboratory: undefined,
 });
 const [messageLoad, setMessageLoad] = useState<Message>();
 const [laboratories, setLaboratories] = useState<Item[]>([]);
 const [disabledLaboratories, setDisabledLaboratories] = useState<Item[]>([]);
 const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
 const [isEdition, setEdition] = useState<boolean>(false);
 const [isLoading, setIsLoading] = useState<boolean>(false);
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
  if (targetSearch) search(targetSearch);
 }, [targetSearch?.search]);

 useEffect(() => {
  updateAll();
 }, []);

 const handlerAppearEnable = () => {
  setIsEnable(true);
 };

 const handlerHiddeEnable = () => {
  setIsEnable(false);
 };

 /* hanlder to update all laboratory information */
 const handlerRefresAll = () => {
  updateAll();
 };

 /* handler to disable one laboratory */
 const handlerDisable = (id: number, laboratory: string) => {
  handlerAppear(laboratory, typesAction.eliminate, messageDialog.laboratory.disable);
  setLaboratory({ idlaboratory: id, laboratory });
 };

 /* handler to enable one laboratory */
 const handlerEnable = (id: number, laboratory: string) => {
  handlerAppear(laboratory, typesAction.enable, messageDialog.laboratory.enable);
  setLaboratory({ idlaboratory: id, laboratory });
 };

 /* handler to create a new laboratory */
 const handlerSave = (values: LaboratoryModel) => {
  if (!values.laboratory) return;
  create(values);
 };

 /* handler to edit a new laboratory */
 const handlerEdit = (values: LaboratoryModel) => {
  if (!values.laboratory) return;
  handlerAppear(values.laboratory, typesAction.edit, messageDialog.laboratory.edit);
  setLaboratory(values);
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

 /* update all laboratory */
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

 const resetAll = () => {
  setLaboratory({
   idlaboratory: undefined,
   laboratory: undefined,
  });
 };
 /* create laboratory */
 const create = async (values: LaboratoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.laboratory.create);
  try {
   const rs = await service.create(values);
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
 /* edit laboratory */
 const edit = async (values: LaboratoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.laboratory.edit);
  try {
   const rs = await service.edit(values);
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
 /* disable laboratory */
 const disable = async (values: LaboratoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.laboratory.disable);
  try {
   const rs = await service.disable(values);
   handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  } catch (error) {
   // console.log(error)
   handlerStatus(
    true,
    typesStatusDialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
  updateAll();
 };

 /* enable laboratory */
 const enable = async (values: LaboratoryModel) => {
  setIsLoading(true);
  setMessageLoad(statusLoad.laboratory.enable);
  try {
   const rs = await service.enable(values);
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

 /* search all laboratories */
 const search = async (search: Search) => {
  setIsLoadingSearch(true);
  try {
   const rs = await service.search(search);
   const data = rs.data.data.map((item) => ({ id: item.idlaboratory, name: item.laboratory }));
   if (data) setLaboratories(data);
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
   const data = rs.data.data;
   if (data) setLaboratory(data);
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
  const data = rs.data.data.map((item) => ({ id: item.idlaboratory, name: item.laboratory }));
  if (data) setDisabledLaboratories(data);
 };

 /* show all enable */
 const showAllEnable = async () => {
  const rs = await service.showEnable();
  const data = rs.data.data.map((item) => ({ id: item.idlaboratory, name: item.laboratory }));
  if (data) setLaboratories(data);
 };

 /* eliminating a laboratory */
 if (decisition && type === typesAction.eliminate && laboratory?.idlaboratory) {
  disable(laboratory);
  handlerHidde();
 }
 /* enabling a laboratory */
 if (decisition && type === typesAction.enable && laboratory?.idlaboratory) {
  enable(laboratory);
  handlerHidde();
 }
 /* editing a laboratory */
 if (decisition && type === typesAction.edit && laboratory?.idlaboratory) {
  edit(laboratory);
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
  isLoading,
  isEdition,
  laboratory,
  messageLoad,
  laboratories,
  modalSetting,
  isLoadingSearch,
  disabledLaboratories,
  handlerEdit,
  handlerSave,
  handlerEnable,
  handlerEdition,
  handlerDisable,
  handlerRefresAll,
  handlerHiddeEnable,
  handlerHiddeEdition,
  handlerAppearEnable,
 };
};
export { useLaboratory };
