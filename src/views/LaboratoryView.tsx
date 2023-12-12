import { CustomLaboratoryForm, CustomList, CustomSearch } from '@/atomic/components';
import { CustomDialog, CustomModal } from '@/atomic/designs';
import { validationLaboratory, validationSearch } from '@/validations';
import { useLaboratoryController, useSearch } from '@/hooks';
import { CustomButton } from '@/atomic/elements';
import { types, data } from '@/constants';
import { theme } from '@/atomic/theme';

const { pages } = data.screens.dashboard;
const { forms } = data.screens.dashboard;

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
     title={pages.laboratory.buttons.close}
     type={types.button.icon}
     className="self-center"
     icon={{
      type: types.icon.XCircle,
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
      type={types.form.edit}
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
     title={pages.laboratory.buttons.close}
     type={types.button.icon}
     className="self-center"
     icon={{
      type: types.icon.XCircle,
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
    <p className="text-2xl font-semibold text-slate-100"> {pages.laboratory.error} </p>
   </div>
  );

 return (
  <div className="overflow-scroll flexRowStart">
   {/* laboratory form  */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomLaboratoryForm
     isLoading={isLoading}
     entity={laboratory}
     type={types.form.create}
     handlerSubmit={handlerCreate}
     validationSchema={validationLaboratory}
    />
   </div>

   <div className="flex-1 p-8 flexColStart ">
    {/* header Search */}
    <div className="flexCenter space-x-4">
     {/* button refresh */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.laboratory.buttons.load}
      type={types.button.icon}
      icon={{
       type: types.icon.refresh,
       color: theme.gray,
       size: 35,
       strokeWidth: 1,
      }}
      handlerPress={handlerUpdateAll}
     />
     {/* button length laboratories */}
     <CustomButton
      variant={types.variant.button.secondary}
      text={laboratories.length.toString()}
      title={laboratories.length.toString()}
      type={types.button.default}
     />
     {/*search form*/}
     <CustomSearch
      placeholder={forms.laboratory.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validationSearch}
     />
     {/*button show laboratories eliminated*/}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.laboratory.buttons.eliminate}
      text={disabledLaboratories.length.toString()}
      type={types.button.iconText}
      icon={{
       type: types.icon.elimited,
       color: theme.red,
       size: 35,
       strokeWidth: 1,
      }}
      handlerPress={handlerOpenEnable}
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
