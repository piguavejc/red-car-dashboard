import { useProgressBar, useCategoryController, useLaboratoryController, usePoster } from '@/hooks';
import { CustomButton, CustomInput, CustomPoster, CustomTextArea } from '@/atomic/elements';
import { CustomDetailsProduct, CustomProgressBar, CustomSelect } from '.';
import { CustomProductFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { ProductModel } from '@/mvc/models';
import { Oval } from 'react-loader-spinner';
import { types, data } from '@/constants';
import React from 'react';

const { products } = data.screens.dashboard.forms;

const CustomProductForm = (props: CustomProductFormProps) => {
 const { type } = props;
 const { items, position, handlerPosition } = useProgressBar(4);

 const { categories } = useCategoryController();
 const { laboratories } = useLaboratoryController();
 const { urlImage, handlerPoster } = usePoster();

 if (props.isLoading) {
  return (
   <div className="flex-col-center-center bg-helper px-4 py-8  rounded-lg">
    <Oval
     height={80}
     width={80}
     color="gray"
     wrapperStyle={{}}
     wrapperClass=""
     visible={true}
     ariaLabel="oval-loading"
     secondaryColor="#666"
     strokeWidth={5}
     strokeWidthSecondary={5}
    />
    <p className="default-text-bold"> {products.load} </p>
   </div>
  );
 }

 return (
  <Formik
   enableReinitialize={true}
   validationSchema={props.validationSchema}
   initialValues={props.entity}
   onSubmit={(values: ProductModel, formikHelpers: FormikHelpers<ProductModel>) => {
    props.handlerSubmit(values);
    formikHelpers.resetForm();
   }}
  >
   {(props) => {
    if (props.values.photo) handlerPoster(props.values.photo);
    console.log(props.errors);
    return (
     <section className="flex-row-start-stretch relative">
      <section className="w-[50%] flex-col-start-stretch bg-form p-8 basis-full rounded-lg">
       <CustomProgressBar items={items} handlerItem={handlerPosition} posiition={position} />
       <header>
        <h2 className="title-form">
         {type === types.form.create ? products.titles.create : products.titles.edit}{' '}
        </h2>
       </header>
       {position === 0 && (
        <>
         <CustomSelect
          isRequeried
          data={categories}
          value={props.values.category}
          id={products.fields.category.id}
          label={products.fields.category.label}
          handlerChange={(value) => {
           props.setFieldValue(products.fields.category.id, value);
          }}
         />
         <CustomSelect
          isRequeried
          data={laboratories}
          value={props.values.laboratory}
          id={products.fields.laboratory.id}
          label={products.fields.laboratory.label}
          handlerChange={(value) => {
           props.setFieldValue(products.fields.laboratory.id, value);
          }}
         />
         <CustomInput
          isRequeried
          isDisable={false}
          value={props.values.product}
          id={products.fields.product.id}
          messageError={props.errors.product}
          label={products.fields.product.label}
          placeholder={products.fields.product.placeholder}
          validation={props.errors.product && props.touched.product}
          handlerChange={props.handleChange('product')}
          hanhandlerBlur={props.handleBlur('product')}
         />
         <CustomButton
          isDisable={false}
          text={'Siguiente'}
          title={'Siguiente'}
          type={types.button.default}
          variant={types.variant.button.primary}
          handlerPress={() => handlerPosition(1)}
         />
        </>
       )}

       {position === 1 && (
        <>
         <CustomInput
          isDisable={false}
          value={props.values.barcode}
          id={products.fields.barcode.id}
          messageError={props.errors.barcode}
          label={products.fields.barcode.label}
          placeholder={products.fields.barcode.placeholder}
          validation={props.errors.barcode && props.touched.barcode}
          handlerChange={props.handleChange('barcode')}
          hanhandlerBlur={props.handleBlur('barcode')}
         />
         <CustomTextArea
          isRequeried
          isDisable={false}
          value={props.values.features}
          id={products.fields.features.id}
          label={products.fields.features.label}
          placeholder={products.fields.features.placeholder}
          handlerChange={props.handleChange('features')}
          hanhandlerBlur={props.handleBlur('features')}
          validation={props.errors.features && props.touched.features}
          messageError={props.errors.features}
         />
         <CustomTextArea
          isRequeried
          isDisable={false}
          value={props.values.summary}
          id={products.fields.summary.id}
          messageError={props.errors.summary}
          label={products.fields.summary.label}
          placeholder={products.fields.summary.placeholder}
          validation={props.errors.summary && props.touched.summary}
          handlerChange={props.handleChange('summary')}
          hanhandlerBlur={props.handleBlur('summary')}
         />
         <CustomButton
          isDisable={false}
          text={'Siguiente'}
          title={'Siguiente'}
          type={types.button.default}
          variant={types.variant.button.primary}
          handlerPress={() => handlerPosition(2)}
         />
        </>
       )}

       {position === 2 && (
        <>
         <CustomTextArea
          isRequeried
          isDisable={false}
          value={props.values.dosage}
          id={products.fields.dosage.id}
          messageError={props.errors.dosage}
          label={products.fields.dosage.label}
          placeholder={products.fields.dosage.placeholder}
          validation={props.errors.dosage && props.touched.dosage}
          handlerChange={props.handleChange('dosage')}
          hanhandlerBlur={props.handleBlur('dosage')}
         />
         <CustomInput
          isRequeried
          isDisable={false}
          value={props.values.cost}
          id={products.fields.cost.id}
          messageError={props.errors.cost}
          label={products.fields.cost.label}
          placeholder={products.fields.cost.placeholder}
          validation={props.errors.cost && props.touched.cost}
          handlerChange={props.handleChange('cost')}
          hanhandlerBlur={props.handleBlur('cost')}
         />
         <CustomInput
          isRequeried
          isDisable={false}
          value={props.values.pvp}
          id={products.fields.pvp.id}
          messageError={props.errors.pvp}
          label={products.fields.pvp.label}
          placeholder={products.fields.pvp.placeholder}
          validation={props.errors.pvp && props.touched.pvp}
          handlerChange={props.handleChange('pvp')}
          hanhandlerBlur={props.handleBlur('pvp')}
         />
         <CustomButton
          isDisable={false}
          text={'Siguiente'}
          title={'Siguiente'}
          type={types.button.default}
          variant={types.variant.button.primary}
          handlerPress={() => handlerPosition(3)}
         />
        </>
       )}

       {position === 3 && (
        <>
         <CustomPoster
          id={'photo'}
          type={types.form.create}
          value={props.values.photo}
          urlImage={String(urlImage)}
          messageError={props.errors.photo}
          label={products.fields.photo.label}
          validation={props.errors.photo && props.touched.photo}
          handlerChange={(e) => {
           props.setFieldValue('photo', e.target.files![0]);
          }}
          hanhandlerBlur={props.handleBlur('photo')}
         />
         <CustomButton
          type={types.button.default}
          title={
           type === types.form.create
            ? products.buttons.create.primary
            : products.buttons.edit.primary
          }
          text={
           type === types.form.create
            ? products.buttons.create.primary
            : products.buttons.edit.primary
          }
          isDisable={!props.isValid}
          variant={types.variant.button.primary}
          handlerPress={props.handleSubmit}
         />
        </>
       )}
      </section>
      {type === types.form.edit && props.values.photo && (
       <section className="flex-1 w-[50%] p-8 space-y-8">
        <CustomDetailsProduct
         data={{
          pvp: props.values.pvp,
          photo: String(urlImage),
          cost: props.values.cost,
          dosage: props.values.dosage,
          product: props.values.product,
          barcode: props.values.barcode,
          summary: props.values.summary,
          category: props.values.category,
          features: props.values.features,
          idproduct: props.values.idproduct,
          laboratory: props.values.laboratory,
         }}
         isLoading={false}
        />
       </section>
      )}
     </section>
    );
   }}
  </Formik>
 );
};

export { CustomProductForm };
