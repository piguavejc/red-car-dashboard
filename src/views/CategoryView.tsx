import { CustomCategoryForm, CustomList, CustomSearch } from '@/atomic/components';
import { CustomDialog, CustomLoading, CustomModal } from '@/atomic/designs';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { validationCategory } from '@/validations';
import { CustomButton } from '@/atomic/elements';
import { useCategoryController, useSearch } from '@/hooks';
import { validationSearch } from '@/validations';
import { theme } from '@/atomic/theme';

const contentCategory = Object.freeze({
 eliminate: 'Ver categorias eliminadas',
 close: 'Ocultar',
 load: 'Recargar la informacion',
 search: {
  placeholder: 'Buscar laboratorio',
 },
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
  messageLoad,
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
 /* dialog */
 if (dialog.isActivate)
  return (
   <div className="windowSecundary">
    <div className="w-[50%]">
     <CustomDialog setting={dialog} />
    </div>
   </div>
  );

 /* enabling */
 if (isEnable) {
  return (
   <div className="windowSecundary">
    <CustomButton
     type={typesButton.icon}
     stylyButton="self-center"
     title={contentCategory.close}
     icon={{
      type: typesIcon.XCircle,
      strokeWidth: 1,
      color: theme.gray,
      size: 50,
     }}
     handlerPress={handlerCloseEnable}
    />
    <div className="w-[50%]">
     <CustomList data={disabledCategories} handlerEnable={handlerActionEnable} isLoading={false} />
    </div>
   </div>
  );
 }

 /* editing  */
 if (isEdition) {
  return (
   <div className="windowSecundary">
    <CustomButton
     title={contentCategory.load}
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
      entity={category}
      type={typesForm.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validationCategory}
     />
    </div>
   </div>
  );
 }

 return (
  <div className="overflow-scroll flexRowStart">
   {/* category form  */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomCategoryForm
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
      title={contentCategory.load}
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
      placeholder={contentCategory.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validationSearch}
     />
     {/*button show categories eliminated*/}
     <CustomButton
      title={contentCategory.eliminate}
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
     handlerEdit={handlerShowEdit}
     isLoading={isLoadingSearch}
    />
   </div>
  </div>
 );
};

export { CategoryView };
