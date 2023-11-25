import { CustomLaboratoryForm, CustomList, CustomSearch } from '@/atomic/components';
import { CustomDialog, CustomLoading, CustomModal } from '@/atomic/designs';
import { validationLaboratory, validationSearch } from '@/validations';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { useLaboratoryController, useSearch } from '@/hooks';
import { CustomButton } from '@/atomic/elements';
import { theme } from '@/atomic/theme';

const content = Object.freeze({
 eliminate: 'Ver laboratorios eliminados',
 close: 'Ocultar',
 load: 'Recargar la informacion',
 search: {
  placeholder: 'Buscar laboratorio',
 },
 error: 'Ha ocurrido un error en el servidor, por favor recargue la pagina',
});

const LaboratoryView = () => {
 const { search, hanlderSearch } = useSearch();
 const {
  dialog,
  isEnable,
  isLoading,
  isEdition,
  laboratory,
  existError,
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
 } = useLaboratoryController(search);

 /* dialog */
 if (dialog.isActivate)
  return (
   <div className="windowSecundary">
    <div className="w-[50%]">
     <CustomDialog setting={dialog} />
    </div>
   </div>
  );

 /* modal */
 if (modalSetting.isActivate) {
  return (
   <div className="windowSecundary">
    <div className="w-[50%]">
     <CustomModal setting={modalSetting} />
    </div>
   </div>
  );
 }

 /* editing  */
 if (isEdition) {
  return (
   <div className="windowSecundary">
    <CustomButton
     title={content.close}
     type={typesButton.icon}
     stylyButton="self-center"
     icon={{
      type: typesIcon.XCircle,
      strokeWidth: 1,
      color: theme.gray,
      size: 50,
     }}
     handlerPress={handlerHiddeEdit}
    />
    <div className="w-[50%]">
     <CustomLaboratoryForm
      isLoading={isLoading}
      entity={laboratory}
      type={typesForm.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validationLaboratory}
     />
    </div>
   </div>
  );
 }

 /* enabling */
 if (isEnable) {
  return (
   <div className="windowSecundary ">
    <CustomButton
     title={content.close}
     type={typesButton.icon}
     stylyButton="self-center"
     icon={{
      type: typesIcon.XCircle,
      strokeWidth: 1,
      color: theme.gray,
      size: 50,
     }}
     handlerPress={handlerCloseEnable}
    />
    <div className="flex-1  w-[50%]">
     <CustomList
      data={disabledLaboratories}
      handlerEnable={handlerActionEnable}
      isLoading={isLoadingSearch}
     />
    </div>
   </div>
  );
 }

 /* error */

 if (existError)
  return (
   <div className="flex-1 h-screen flex flex-col justify-center items-center bg-slate-800 px-4 py-8  rounded-lg space-y-4">
    <img className="max-w-[30%] rounded-xl" src="/not-found.svg" alt="" />
    <p className="text-2xl font-semibold text-slate-100"> {content.error} </p>
   </div>
  );

 return (
  <div className="overflow-scroll flexRowStart">
   {/* laboratory form  */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomLaboratoryForm
     isLoading={isLoading}
     entity={laboratory}
     type={typesForm.create}
     handlerSubmit={handlerCreate}
     validationSchema={validationLaboratory}
    />
   </div>

   <div className="flex-1 p-8 flexColStart ">
    {/* header Search */}
    <div className="flexCenter space-x-4">
     {/* button refresh */}
     <CustomButton
      title={content.load}
      stylyButton="bg-gray-100 p-2 rounded-lg"
      type={typesButton.icon}
      icon={{
       type: typesIcon.refresh,
       color: theme.gray,
       size: 35,
       strokeWidth: 1,
      }}
      handlerPress={handlerUpdateAll}
     />
     {/* button length laboratories */}
     <CustomButton
      stylyButton="bg-gray-100 p-2 rounded-lg"
      stylyText="text-xl text-slate-600 font-semibold"
      text={laboratories.length.toString()}
      title={laboratories.length.toString()}
      type={typesButton.default}
     />
     {/*search form*/}
     <CustomSearch
      placeholder={content.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validationSearch}
     />
     {/*button show laboratories eliminated*/}
     <CustomButton
      title={content.eliminate}
      stylyButton="bg-gray-100 p-2 rounded-lg flexCenter"
      stylyText="text-xl font-semibold text-slate-600"
      text={'' + disabledLaboratories.length}
      type={typesButton.iconText}
      handlerPress={handlerOpenEnable}
      icon={{
       type: typesIcon.elimited,
       color: theme.red,
       size: 35,
       strokeWidth: 1,
      }}
     />
    </div>
    {/*laboratories list*/}
    <CustomList
     data={laboratories}
     handlerEdit={handlerShowEdit}
     handlerDelete={handlerActionDisable}
     isLoading={isLoadingSearch}
    />
   </div>
  </div>
 );
};

export { LaboratoryView };
