import React from 'react';
import { CustomButton } from '@/atomic/elements';
import { CustomList, CustomSearch, CustomProductForm } from '@/atomic/components';
import { CustomModal, CustomDialog, CustomLoading } from '@/atomic/designs';
import { typesButton, typesForm, typesIcon } from '@/constants';
import { useProduct } from '../hooks/useProduct';
import { useSearch } from '../hooks/useSearch';
import { validationCategory, validationProduct, validationSearch } from '@/validations';
import { theme } from '@/atomic/theme';
import { useLaboratory } from '../hooks/useLaboratory';

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
  handlerSave,
  handlerEdit,
  handlerEnable,
  handlerEdition,
  handlerDisable,
  handlerRefresAll,
  handlerHiddeEnable,
  handlerHiddeEdition,
  handlerAppearEnable,
 } = useProduct(search);
 const { laboratories } = useLaboratory();

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
     handlerPress={handlerHiddeEnable}
    />
    <div className="w-[50%]">
     <CustomList data={disabledProducts} handlerEnable={handlerEnable} isLoading={false} />
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
     handlerPress={handlerHiddeEdition}
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
  <div className="flexRowStart">
   <div className="p-4 basis-6/12">
    <CustomProductForm
     entity={product}
     type={typesForm.create}
     handlerSubmit={handlerSave}
     validationSchema={validationCategory}
    />
   </div>

   <div className="p-4 w-[50%] flexColStart">
    <div className="flex flex-row justify-start items-center space-x-4 overflow-scroll pb-2"></div>
    <div className="flexCenter">
     <CustomButton
      stylyButton="bg-gray-100 p-2 rounded-lg"
      title={contentProduct.load}
      type={typesButton.icon}
      handlerPress={handlerRefresAll}
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
      handlerPress={handlerAppearEnable}
      icon={{
       type: typesIcon.elimited,
       color: theme.red,
       size: 35,
       strokeWidth: 1,
      }}
     />
    </div>
    <CustomList
     data={products}
     handlerDelete={handlerDisable}
     isLoading={isLoadingSearch}
     handlerEdit={handlerEdition}
    />
   </div>
  </div>
 );
};

export { ProductView };
