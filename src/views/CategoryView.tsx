import { CustomCategoryForm, CustomList, CustomSearch } from '@/atomic/components';
import { CustomDialog, CustomLoading, CustomModal } from '@/atomic/designs';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { validationCategory } from '@/validations';
import { CustomButton } from '@/atomic/elements';
import { useCategory, useSearch } from '@/hooks';
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
  isLoading,
  categories,
  messageLoad,
  modalSetting,
  isEdition,
  isLoadingSearch,
  disabledCategories,
  handlerSave,
  handlerEdit,
  handlerEdition,
  handlerEnable,
  handlerDisable,
  handlerRefresAll,
  handlerHiddeEnable,
  handlerHiddeEdition,
  handlerAppearEnable,
 } = useCategory(search);

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
     handlerPress={handlerHiddeEnable}
    />
    <div className="w-[50%]">
     <CustomList data={disabledCategories} handlerEnable={handlerEnable} isLoading={false} />
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
     handlerPress={handlerHiddeEdition}
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
  <div className="flexRowStart">
   {/* category form  */}
   <div className="p-8 w-6/12">
    <CustomCategoryForm
     entity={category}
     type={typesForm.create}
     handlerSubmit={handlerSave}
     validationSchema={validationCategory}
    />
   </div>
   <div className="p-8 w-6/12 flexColStart">
    {/*header search */}
    <div className="flexCenter space-x-4">
     {/* button loading */}
     <CustomButton
      stylyButton="bg-gray-100 p-2 rounded-lg"
      title={contentCategory.load}
      type={typesButton.icon}
      handlerPress={handlerRefresAll}
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
      handlerPress={handlerAppearEnable}
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
     handlerDelete={handlerDisable}
     handlerEdit={handlerEdition}
     isLoading={isLoadingSearch}
    />
   </div>
  </div>
 );
};

export { CategoryView };
