import React from 'react';
import { CustomButton } from '@/atomic/elements';
import {
 CustomTabs,
 CustomList,
 CustomSearch,
 CustomProductForm,
 CustomDetailsProduct,
} from '@/atomic/components';
import { CustomModal, CustomDialog } from '@/atomic/designs';
import { useProductController, useSearch, useTab, useCategoryController } from '@/hooks';
import { validationCategory, validationProduct, validationSearch } from '@/validations';
import { types, data } from '@/constants';
import { theme } from '@/atomic/theme';

const { pages } = data.screens.dashboard;
const { forms } = data.screens.dashboard;

const ProductView = () => {
 const { tab, handlerTab } = useTab();
 const { search, hanlderSearch } = useSearch();
 const {
  dialog,
  detail,
  product,
  products,
  isEnable,
  isEdition,
  isLoading,
  existError,
  modalSetting,
  isLoadingSearch,
  disabledProducts,
  handlerEdit,
  handlerDetail,
  handlerCreate,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerCloseDetail,
  handlerOpenEnable,
  handlerCloseEnable,
  handlerActionEnable,
  handlerActionDisable,
 } = useProductController(tab, search);
 const { categories } = useCategoryController();
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
     title={pages.products.buttons.load}
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
    <div className="flex-1 w-[50%]">
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
     title={pages.products.buttons.load}
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
     <CustomProductForm
      isLoading={isLoading}
      entity={product}
      type={types.form.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validationProduct}
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
    <p className="text-2xl font-semibold text-slate-100"> {pages.products.error} </p>
   </div>
  );

 return (
  <div className="overflow-scroll flexRowStart">
   {/* product form */}
   <div className="flex-1 w-[50%] p-8 overflow-scroll">
    <CustomProductForm
     isLoading={isLoading}
     entity={product}
     type={types.form.create}
     handlerSubmit={handlerCreate}
     validationSchema={validationCategory}
    />
   </div>

   <div className="flex-1 w-[50%] p-8 flexColStart">
    {/* Tabs */}
    <CustomTabs
     items={categories.map((category) => category.name as string)}
     itemFocus={tab}
     returnItem={handlerTab}
    />
    {/* header Search */}
    <div className="flexCenter space-x-4">
     {/* button refresh */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.products.buttons.load}
      type={types.button.icon}
      icon={{
       type: types.icon.refresh,
       color: theme.gray,
       size: 35,
       strokeWidth: 1,
      }}
      handlerPress={handlerUpdateAll}
     />
     {/* button length products */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={products.length.toString()}
      text={products.length.toString()}
      type={types.button.default}
     />
     {/* input Search */}
     <CustomSearch
      placeholder={forms.products.search.placeholder}
      validationSchema={validationSearch}
      handlerSubmit={hanlderSearch}
      entity={search}
     />
     {/* button delete */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.products.buttons.eliminate}
      text={'' + disabledProducts.length}
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

    {/* list products  and detail one product */}
    {!detail ? (
     <CustomList
      data={products}
      handlerDelete={handlerActionDisable}
      isLoading={isLoadingSearch}
      handlerEdit={handlerShowEdit}
      handlerDetail={handlerDetail}
     />
    ) : (
     <CustomDetailsProduct
      data={detail}
      handlerClose={handlerCloseDetail}
      isLoading={isLoadingSearch}
     />
    )}
   </div>
  </div>
 );
};

export { ProductView };
