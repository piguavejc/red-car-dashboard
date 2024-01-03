import React from 'react';
import { CustomButton } from '@/atomic/elements';
import {
 CustomList,
 CustomTabs,
 CustomSearch,
 CustomProductForm,
 CustomDetailsProduct,
 CustomMessageError,
} from '@/atomic/components';
import { useProductController, useSearch, useTab, useCategoryController } from '@/hooks';
import { CustomModal, CustomDialog } from '@/atomic/designs';
import { types, data } from '@/constants';
import { validate } from '@/validations';

const { pages } = data.screens.dashboard;
const { forms } = data.screens.dashboard;

const ProductView = () => {
 const { tab, handlerTab } = useTab('Todos');
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
  messageError,
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
 } = useProductController(tab, undefined, search);
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
     icon={types.icon.close}
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
     icon={types.icon.close}
     handlerPress={handlerHiddeEdit}
    />
    <div className="w-full">
     <CustomProductForm
      isLoading={isLoading}
      entity={product}
      type={types.form.edit}
      handlerSubmit={handlerEdit}
      validationSchema={validate.product}
     />
    </div>
   </div>
  );
 }
 /* error */
 if (existError) return <CustomMessageError message={messageError} />;

 return (
  <div className="overflow-scroll flex-row-start-stretch">
   {/* product form */}
   <div className="flex-1 w-[50%] p-8 overflow-scroll">
    <CustomProductForm
     isLoading={isLoading}
     entity={product}
     type={types.form.create}
     handlerSubmit={handlerCreate}
     validationSchema={validate.product}
    />
   </div>

   <div className="flex-col-start-stretch w-[50%] p-8">
    {/* Tabs */}
    <CustomTabs
     items={categories.map((category) => category.name as string)}
     itemFocus={tab}
     returnItem={handlerTab}
    />
    {/* header Search */}
    <div className="flex-row-center-center flex-initial">
     {/* button refresh */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.products.buttons.load}
      type={types.button.icon}
      icon={types.icon.refresh}
      handlerPress={handlerUpdateAll}
     />
     {/* input Search */}
     <CustomSearch
      placeholder={forms.products.search.placeholder}
      validationSchema={validate.search}
      handlerSubmit={hanlderSearch}
      entity={search}
     />
     {/* button delete */}
     <CustomButton
      variant={types.variant.button.secondary}
      title={pages.products.buttons.eliminate}
      text={'' + disabledProducts.length}
      type={types.button.iconText}
      icon={types.icon.elimited}
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
