import {
 CustomCategoryForm,
 CustomDetailsCategory,
 CustomList,
 CustomSearch,
} from '@/atomic/components';
import { CustomDialog, CustomModal } from '@/atomic/designs';
import { useCategoryController, useSearch } from '@/hooks';
import { validationCategory } from '@/validations';
import { CustomButton } from '@/atomic/elements';
import { validationSearch } from '@/validations';
import { types, data } from '@/constants';
import { theme } from '@/atomic/theme';

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
     icon={{
      type: types.icon.XCircle,
      strokeWidth: 1,
      color: theme.gray,
      size: 50,
     }}
     handlerPress={handlerHiddeEdit}
    />
    <div className="w-full">
     <CustomCategoryForm
      isLoading={isLoading}
      entity={category}
      type={types.form.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validationCategory}
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
    <p className="text-2xl font-semibold text-slate-100"> {pages.category.error} </p>
   </div>
  );

 return (
  <div className="overflow-scroll flexRowStart">
   {/* category form  */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomCategoryForm
     isLoading={isLoading}
     entity={category}
     type={types.form.create}
     handlerSubmit={handlerCreate}
     validationSchema={validationCategory}
    />
   </div>

   <div className="flex-1 p-8 flexColStart">
    {/*header search */}
    <div className="flexCenter space-x-4">
     {/* button loading */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.category.buttons.load}
      type={types.button.icon}
      handlerPress={handlerUpdateAll}
      icon={{
       type: types.icon.refresh,
       color: theme.gray,
       size: 35,
       strokeWidth: 1,
      }}
     />
     {/* button length categories */}
     <CustomButton
      text={categories.length.toString()}
      title={categories.length.toString()}
      type={types.button.default}
      variant={types.variant.button.secondary}
     />
     {/* Search Form  */}
     <CustomSearch
      placeholder={forms.category.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validationSearch}
     />
     {/*button show categories eliminated*/}
     <CustomButton
      title={pages.category.buttons.eliminate}
      text={'' + disabledCategories.length}
      type={types.button.iconText}
      variant={types.variant.button.secondary}
      handlerPress={handlerOpenEnable}
      icon={{
       type: types.icon.elimited,
       color: theme.red,
       size: 35,
       strokeWidth: 1,
      }}
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
