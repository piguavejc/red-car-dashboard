import { useDialog, useModal } from '.';
import { use, useEffect, useState } from 'react';
import { LaboratoryModel } from '@/mvc/models';
import { useLaboratory } from './useLaboratory';
import { messageDialog, types } from '@/constants';
import { Item, Search, statusDialog } from '@/types';
import { useSession } from 'next-auth/react';

const useLaboratoryController = (
 category: string | undefined,
 targetSearch: Search | undefined,
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
  listCategory,
  existError,
  messageError,
 } = useLaboratory();
 const [laboratory, setLaboratory] = useState<LaboratoryModel>({
  id: undefined,
  laboratory: undefined,
 });
 const [laboratories, setLaboratories] = useState<Item[]>([]);
 const [token, setToken] = useState<string>('');
 const [disabledLaboratories, setDisabledLaboratories] = useState<Item[]>([]);
 const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(true);
 const [isLoading, setIsLoading] = useState<boolean>(true);
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
  if (session.status === 'authenticated') console.log(session);
 }, [session.status]);
 useEffect(() => {
  if (targetSearch) handlerSearch(targetSearch);
 }, [targetSearch?.search]);

 useEffect(() => {
  if (category) handlerListCategory(category);
 }, [category]);

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
  handlerAppear(laboratory, types.action.enable, messageDialog.laboratory.enable);
  setLaboratory({ id: id, laboratory });
 };

 /* handler to disable one laboratory */
 const handlerActionDisable = (id: number, laboratory: string) => {
  handlerAppear(laboratory, types.action.eliminate, messageDialog.laboratory.disable);
  setLaboratory({ id: id, laboratory });
 };

 const handlerHiddeEdit = () => {
  setEdition(false);
  setLaboratory({
   id: undefined,
   laboratory: undefined,
  });
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
  try {
   const rs = await create(values, session.data?.user.token as string);
   if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    types.dialog.error,
    'Ha ocurido un error en el servidor, por favor recargue la pagina',
   );
  }
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* edit laboratory */
 const handlerEdit = async (values: LaboratoryModel) => {
  const rs = await edit(values, session.data?.user.token as string);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  handlerHiddeEdit();
  handlerUpdateAll();
 };

 /* disable laboratory */
 const handlerDisable = async (values: LaboratoryModel) => {
  const rs = await disable(values, session.data?.user.token as string);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  handlerHidde();
  handlerUpdateAll();
 };

 /* enable laboratory */
 const handlerEnable = async (values: LaboratoryModel) => {
  const rs = await enable(values, session.data?.user.token as string);
  if (rs?.data) handlerStatus(true, rs.data.id as statusDialog, rs.data.message);
  handlerHidde();
  handlerUpdateAll();
 };

 /* search all laboratories */
 const handlerSearch = async (value: Search) => {
  setIsLoadingSearch(true);
  try {
   const rs = await search(value);
   if (rs?.data) {
    const data = rs.data.data.map((item) => ({ id: item.id_laboratory, name: item.laboratory }));
    setLaboratories(data);
   }
  } catch (error) {
   //  console.log(error);
   handlerStatus(
    true,
    types.dialog.error,
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
   const data = rs.data.data.map((item) => ({ id: item.id_laboratory, name: item.laboratory }));
   setDisabledLaboratories(data);
  }
  setIsLoadingSearch(false);
 };

 /* show all enable */
 const handlerListEnableds = async () => {
  setIsLoadingSearch(true);
  if (laboratories.length === 0) setLaboratories([]);
  const rs = await listEnableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({ id: item.id_laboratory, name: item.laboratory }));
   setLaboratories(data);
  }
  setIsLoadingSearch(false);
 };

 /* show all enable */
 const handlerListCategory = async (category: string) => {
  setIsLoadingSearch(true);
  if (laboratories.length === 0) setLaboratories([]);
  const rs = await listCategory(category);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({ id: item.id_laboratory, name: item.laboratory }));
   setLaboratories(data);
  }
  setIsLoadingSearch(false);
 };

 /* ----------------------------------------------------------------------------------------------------------------------- */

 /* eliminating a laboratory */
 if (decisition && type === types.action.eliminate && laboratory?.id) {
  handlerDisable(laboratory);
 }
 /* enabling a laboratory */
 if (decisition && type === types.action.enable && laboratory?.id) {
  handlerEnable(laboratory);
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
  existError,
  laboratories,
  messageError,
  modalSetting,
  isLoadingSearch,
  disabledLaboratories,
  handlerEdit,
  listCategory,
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
