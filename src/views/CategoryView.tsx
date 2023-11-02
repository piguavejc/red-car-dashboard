import { CustomCategoryForm, CustomList, CustomSearch } from '@/atomic/components';
import { CustomDialog, CustomLoading, CustomModal } from '@/atomic/designs';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { validationCategory } from '@/validations';
import { CustomButton } from '@/atomic/elements';
import { useCategoryController, useSearch } from '@/hooks';
import { validationSearch } from '@/validations';
import { theme } from '@/atomic/theme';

const content = Object.freeze({
 eliminate: 'Ver categorias eliminadas',
 close: 'Ocultar',
 load: 'Recargar la informacion',
 search: {
  placeholder: 'Buscar laboratorio',
 },
 error: 'Ha ocurrido un error en el servidor, por favor recargue la pagina',
});

const CategoryView = () => {
 const { search, hanlderSearch } = useSearch();
 const {
  dialog,
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
  handlerCreate,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerOpenEnable,
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
     type={typesButton.icon}
     stylyButton="self-center"
     title={content.close}
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
     title={content.load}
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
     <CustomCategoryForm
      isLoading={isLoading}
      entity={category}
      type={typesForm.edit}
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
    <p className="text-2xl font-semibold text-slate-100"> {content.error} </p>
   </div>
  );

 return (
  <div className="overflow-scroll flexRowStart">
   {/* category form  */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomCategoryForm
     isLoading={isLoading}
     entity={category}
     type={typesForm.create}
     handlerSubmit={handlerCreate}
     validationSchema={validationCategory}
    />
   </div>

   <div className="flex-1 p-8 flexColStart">
    {/*header search */}
    <div className="flexCenter space-x-4">
     {/* button loading */}
     <CustomButton
      stylyButton="bg-gray-100 p-2 rounded-lg"
      title={content.load}
      type={typesButton.icon}
      handlerPress={handlerUpdateAll}
      icon={{
       type: typesIcon.refresh,
       color: theme.gray,
       size: 35,
       strokeWidth: 1,
      }}
     />
     {/* Search Form  */}
     <CustomSearch
      placeholder={content.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validationSearch}
     />
     {/*button show categories eliminated*/}
     <CustomButton
      title={content.eliminate}
      stylyButton="flexCenter bg-gray-100 p-2 rounded-lg"
      stylyText="text-xl font-semibold"
      text={'' + disabledCategories.length}
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
    {/* categories list  */}
    <CustomList
     data={categories}
     handlerDelete={handlerActionDisable}
     isLoading={isLoadingSearch}
     handlerEdit={handlerShowEdit}
    />
   </div>
  </div>
 );
};

export { CategoryView };
