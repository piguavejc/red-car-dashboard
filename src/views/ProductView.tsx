import React from 'react';
import { CustomButton } from '@/atomic/elements';
import { CustomList, CustomSearch, CustomProductForm } from '@/atomic/components';
import { CustomModal, CustomDialog, CustomLoading } from '@/atomic/designs';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { useProductController, useSearch, useLaboratoryController } from '@/hooks';
import { validationCategory, validationProduct, validationSearch } from '@/validations';
import { theme } from '@/atomic/theme';

const contentProduct = Object.freeze({
 eliminate: 'Ver productos eliminados',
 close: 'Cerrar',
 load: 'Recargar la informacion',
 search: {
  placeholder: 'Buscar el producto',
 },
});

const ProductView = () => {
 const { search, hanlderSearch } = useSearch();
 const {
  dialog,
  product,
  products,
  isEnable,
  isEdition,
  isLoading,
  messageLoad,
  modalSetting,
  isLoadingSearch,
  disabledProducts,
  handlerEdit,
  handlerCreate,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerOpenEnable,
  handlerCloseEnable,
  handlerActionEnable,
  handlerActionDisable,
 } = useProductController(search);
 const { laboratories } = useLaboratoryController();

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

 /* enabling */
 if (isEnable) {
  return (
   <div className="windowSecundary ">
    <CustomButton
     title={contentProduct.load}
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
      data={disabledProducts}
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
     title={contentProduct.load}
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
    <div className="w-[50%]]">
     <CustomProductForm
      entity={product}
      type={typesForm.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validationProduct}
     />
    </div>
   </div>
  );
 }

 return (
  <div className="overflow-scroll flexRowStart">
   {/* product form */}
   <div className="flex-1 p-8 overflow-scroll">
    <CustomProductForm
     entity={product}
     type={typesForm.create}
     handlerSubmit={handlerCreate}
     validationSchema={validationCategory}
    />
   </div>

   <div className="flex-1 p-8 flexColStart">
    {/* header Search */}
    <div className="flexCenter space-x-4">
     <CustomButton
      stylyButton="bg-gray-100 p-2 rounded-lg"
      title={contentProduct.load}
      type={typesButton.icon}
      handlerPress={handlerUpdateAll}
      icon={{
       type: typesIcon.refresh,
       color: theme.gray,
       size: 35,
       strokeWidth: 1,
      }}
     />
     <CustomSearch
      placeholder={contentProduct.search.placeholder}
      entity={search}
      handlerSubmit={hanlderSearch}
      validationSchema={validationSearch}
     />
     <CustomButton
      title={contentProduct.eliminate}
      stylyButton="flexCenter bg-gray-100 p-2 rounded-lg"
      stylyText="text-xl font-semibold"
      text={'' + disabledProducts.length}
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
    {/* products list */}
    <CustomList
     data={products}
     handlerDelete={handlerActionDisable}
     isLoading={isLoadingSearch}
     handlerEdit={handlerShowEdit}
    />
   </div>
  </div>
 );
};

export { ProductView };
