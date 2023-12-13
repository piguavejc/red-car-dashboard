import { CustomLaboratoryForm, CustomList, CustomSearch } from '@/atomic/components';
import { CustomDialog, CustomModal } from '@/atomic/designs';
import { useLaboratoryController, useSearch } from '@/hooks';
import { CustomButton } from '@/atomic/elements';
import { types, data } from '@/constants';
import { validate } from '@/validations';

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
     icon={types.icon.XCircle}
     handlerPress={handlerHiddeEdit}
    />
    <div className="w-[50%]">
     <CustomLaboratoryForm
      isLoading={isLoading}
      entity={laboratory}
      type={types.form.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validate.laboratory}
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
     icon={types.icon.XCircle}
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
   <div className="flex-col-center-center h-screen bg-slate-800 px-4 py-8  rounded-lg">
    <img className="max-w-[30%] rounded-xl" src="/not-found.svg" alt="" />
    <p className="error-text"> {pages.laboratory.error} </p>
   </div>
  );

 return (
  <div className="overflow-scroll flex-row-start-stretch">
   {/* laboratory form  */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomLaboratoryForm
     isLoading={isLoading}
     entity={laboratory}
     type={types.form.create}
     handlerSubmit={handlerCreate}
     validationSchema={validate.laboratory}
    />
   </div>

   <div className="flex-col-start-stretch p-8">
    {/* header Search */}
    <div className="flex-row-center-center flex-initial">
     {/* button refresh */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.laboratory.buttons.load}
      type={types.button.icon}
      icon={types.icon.refresh}
      handlerPress={handlerUpdateAll}
     />
     {/*search form*/}
     <CustomSearch
      placeholder={forms.laboratory.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validate.search}
     />
     {/*button show laboratories eliminated*/}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.laboratory.buttons.eliminate}
      text={disabledLaboratories.length.toString()}
      type={types.button.iconText}
      icon={types.icon.elimited}
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
