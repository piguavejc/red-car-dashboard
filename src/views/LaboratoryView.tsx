import { CustomLaboratoryForm, CustomList, CustomSearch } from '@/atomic/components';
import { CustomDialog, CustomLoading, CustomModal } from '@/atomic/designs';
import { validationLaboratory, validationSearch } from '@/validations';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { useLaboratoryController, useSearch } from '@/hooks';
import { CustomButton } from '@/atomic/elements';
import { theme } from '@/atomic/theme';

const contentLaboratory = Object.freeze({
 eliminate: 'Ver laboratorios eliminados',
 close: 'Ocultar',
 load: 'Recargar la informacion',
 search: {
  placeholder: 'Buscar laboratorio',
 },
});

const LaboratoryView = () => {
 const { search, hanlderSearch } = useSearch();
 const {
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
 } = useLaboratoryController(search);

 /* Loading */
 if (isLoading) {
  return (
   <div className="windowSecundary">
    <div className="w-[50%]">
     <CustomLoading colorText={''} message={messageLoad!} background={''} />
    </div>
   </div>
  );
 }

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
     title={contentLaboratory.close}
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
     title={contentLaboratory.close}
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
    <div className="w-[50%]">
     <CustomList
      data={disabledLaboratories}
      handlerEnable={handlerActionEnable}
      isLoading={false}
     />
    </div>
   </div>
  );
 }

 return (
  <div className="overflow-scroll flexRowStart">
   {/* laboratory form  */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomLaboratoryForm
     entity={laboratory}
     type={typesForm.create}
     handlerSubmit={handlerCreate}
     validationSchema={validationLaboratory}
    />
   </div>

   <div className="flex-1 p-8 flexColStart ">
    {/* header Search */}
    <div className="flexCenter space-x-4">
     {/* button loading */}
     <CustomButton
      title={contentLaboratory.load}
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
     {/*search form*/}
     <CustomSearch
      placeholder={contentLaboratory.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validationSearch}
     />
     {/*button show laboratories eliminated*/}
     <CustomButton
      title={contentLaboratory.eliminate}
      stylyButton="bg-gray-100 p-2 rounded-lg flexCenter"
      stylyText="text-xl font-semibold"
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
