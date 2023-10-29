import { CustomLaboratoryForm, CustomList, CustomSearch } from '@/atomic/components';
import { CustomDialog, CustomLoading, CustomModal } from '@/atomic/designs';
import { validationLaboratory, validationSearch } from '@/validations';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { useLaboratory, useSearch } from '@/hooks';
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
  handlerSave,
  handlerEdit,
  handlerEnable,
  handlerDisable,
  handlerEdition,
  handlerRefresAll,
  handlerHiddeEnable,
  handlerHiddeEdition,
  handlerAppearEnable,
 } = useLaboratory(search);

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
     handlerPress={handlerHiddeEdition}
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
     handlerPress={handlerHiddeEnable}
    />
    <div className="w-[50%]">
     <CustomList data={disabledLaboratories} handlerEnable={handlerEnable} isLoading={false} />
    </div>
   </div>
  );
 }

 return (
  <div className="flexRowStart">
   {/* laboratory form  */}
   <div className="p-8 w-6/12">
    <CustomLaboratoryForm
     entity={laboratory}
     type={typesForm.create}
     handlerSubmit={handlerSave}
     validationSchema={validationLaboratory}
    />
   </div>
   <div className="w-6/12">
    <div className="p-8 flexColStart ">
     <div className="flexRowBetween">
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
       handlerPress={handlerRefresAll}
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
       handlerPress={handlerAppearEnable}
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
      handlerEdit={handlerEdition}
      handlerDelete={handlerDisable}
      isLoading={isLoadingSearch}
     />
    </div>
   </div>
  </div>
 );
};

export { LaboratoryView };
