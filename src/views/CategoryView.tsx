import {
 CustomCategoryForm,
 CustomDetailsCategory,
 CustomList,
 CustomSearch,
} from '@/atomic/components';
import { CustomDialog, CustomModal } from '@/atomic/designs';
import { useCategoryController, useSearch } from '@/hooks';
import { CustomButton } from '@/atomic/elements';
import { validate } from '@/validations';
import { types, data } from '@/constants';

const { pages } = data.screens.dashboard;
const { forms } = data.screens.dashboard;

const CategoryView = () => {
 const { search, hanlderSearch } = useSearch();
 const {
  dialog,
  detail,
  category,
  isEnable,
  isEdition,
  isLoading,
  categories,
  existError,
  modalSetting,
  isLoadingSearch,
  disabledCategories,
  handlerEdit,
  handlerDeatil,
  handlerCreate,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerOpenEnable,
  handlerCloseDetail,
  handlerCloseEnable,
  handlerActionEnable,
  handlerActionDisable,
 } = useCategoryController(search);

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

 /* enabling */
 if (isEnable) {
  return (
   <div className="windowSecundary">
    <CustomButton
     type={types.button.icon}
     className="self-center"
     title={pages.category.buttons.close}
     icon={types.icon.XCircle}
     handlerPress={handlerCloseEnable}
    />
    <div className="flex-1  w-[50%]">
     <CustomList
      data={disabledCategories}
      handlerEnable={handlerActionEnable}
      isLoading={isLoadingSearch}
     />
    </div>
   </div>
  );
 }

 /* editing  */
 if (isEdition) {
  return (
   <div className="windowSecundary">
    <CustomButton
     title={pages.category.buttons.load}
     type={types.button.icon}
     className="self-center"
     icon={types.icon.XCircle}
     handlerPress={handlerHiddeEdit}
    />
    <div className="w-full">
     <CustomCategoryForm
      isLoading={isLoading}
      entity={category}
      type={types.form.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validate.category}
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
    <p className="error-text"> {pages.category.error} </p>
   </div>
  );

 return (
  <div className="overflow-scroll flex-row-start-stretch">
   {/* category form  */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomCategoryForm
     isLoading={isLoading}
     entity={category}
     type={types.form.create}
     handlerSubmit={handlerCreate}
     validationSchema={validate.category}
    />
   </div>

   <div className="flex-1 p-8 flex-col-start-stretch">
    {/*header search */}
    <div className="flex-row-center-center flex-initial">
     {/* button loading */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.category.buttons.load}
      type={types.button.icon}
      handlerPress={handlerUpdateAll}
      icon={types.icon.refresh}
     />
     {/* Search Form  */}
     <CustomSearch
      placeholder={forms.category.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validate.search}
     />
     {/*button show categories eliminated*/}
     <CustomButton
      title={pages.category.buttons.eliminate}
      text={'' + disabledCategories.length}
      type={types.button.iconText}
      variant={types.variant.button.secondary}
      handlerPress={handlerOpenEnable}
      icon={types.icon.elimited}
     />
    </div>
    {/* list categories and detail one category  */}
    {!detail ? (
     <CustomList
      data={categories}
      handlerDelete={handlerActionDisable}
      isLoading={isLoadingSearch}
      handlerEdit={handlerShowEdit}
      handlerDetail={handlerDeatil}
     />
    ) : (
     <CustomDetailsCategory
      data={detail}
      handlerClose={handlerCloseDetail}
      isLoading={isLoadingSearch}
     />
    )}
   </div>
  </div>
 );
};

export { CategoryView };
