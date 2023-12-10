import { CustomButton, CustomInput, CustomPoster, CustomTextArea } from '@/atomic/elements';
import { useProgressBar, useCategoryController, useLaboratoryController, usePoster } from '@/hooks';
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
   <div className="flex-1 flex flex-col justify-center items-center bg-slate-800 px-4 py-8  rounded-lg space-y-4">
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
    <p className="text-2xl font-semibold text-slate-100"> {products.load} </p>
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
    return (
     <section className="flex-1 flex flex-row justify-start items-start relative space-x-4">
      <section className="backgroundForm p-8 basis-full flexColStart  rounded-lg">
       <CustomProgressBar items={items} handlerItem={handlerPosition} posiition={position} />
       <header>
        <h2 className="colorTitleForm">
         {type === types.form.create ? products.titles.create : products.titles.edit}{' '}
        </h2>
       </header>
       {position === 0 && (
        <>
         <CustomSelect
          stylyLabel={'label'}
          stylySelect={'inputSelectEnable'}
          label={products.fields.category.label}
          value={props.values.category}
          data={categories}
          id={products.fields.category.id}
          handlerChange={(value) => {
           props.setFieldValue(products.fields.category.id, value);
          }}
          isRequeried
         />
         <CustomSelect
          stylyLabel={'label'}
          stylySelect={'inputSelectEnable'}
          label={products.fields.laboratory.label}
          value={props.values.laboratory}
          data={laboratories}
          id={products.fields.laboratory.id}
          handlerChange={(value) => {
           props.setFieldValue(products.fields.laboratory.id, value);
          }}
          isRequeried
         />
         <CustomInput
          id={products.fields.product.id}
          className={'backgroundField'}
          styleLabel={'label'}
          stylyText={' input'}
          isDisable={false}
          label={products.fields.product.label}
          placeholder={products.fields.product.placeholder}
          value={props.values.product}
          handlerChange={props.handleChange('product')}
          hanhandlerBlur={props.handleBlur('product')}
          validation={props.errors.product && props.touched.product}
          messageError={props.errors.product}
          isRequeried
         />
         <CustomButton
          type={types.button.default}
          title={'Siguiente'}
          text={'Siguiente'}
          isDisable={false}
          stylyButton={'buttonEnable'}
          stylyText={'inputButtonEnable'}
          handlerPress={() => handlerPosition(1)}
         />
        </>
       )}

       {position === 1 && (
        <>
         <CustomInput
          id={products.fields.barcode.id}
          className={'backgroundField'}
          styleLabel={'label'}
          stylyText={' input'}
          isDisable={false}
          label={products.fields.barcode.label}
          placeholder={products.fields.barcode.placeholder}
          value={props.values.barcode}
          handlerChange={props.handleChange('barcode')}
          hanhandlerBlur={props.handleBlur('barcode')}
          validation={props.errors.barcode && props.touched.barcode}
          messageError={props.errors.barcode}
         />
         <CustomTextArea
          id={products.fields.features.id}
          className={'backgroundField'}
          styleLabel={'label'}
          stylyText={' input'}
          isDisable={false}
          label={products.fields.features.label}
          placeholder={products.fields.features.placeholder}
          value={props.values.features}
          handlerChange={props.handleChange('features')}
          hanhandlerBlur={props.handleBlur('features')}
          validation={props.errors.features && props.touched.features}
          messageError={props.errors.features}
          isRequeried
         />
         <CustomTextArea
          id={products.fields.summary.id}
          className={'backgroundField'}
          styleLabel={'label'}
          stylyText={' input'}
          isDisable={false}
          label={products.fields.summary.label}
          placeholder={products.fields.summary.placeholder}
          value={props.values.summary}
          handlerChange={props.handleChange('summary')}
          hanhandlerBlur={props.handleBlur('summary')}
          validation={props.errors.summary && props.touched.summary}
          messageError={props.errors.summary}
          isRequeried
         />
         <CustomButton
          type={types.button.default}
          title={'Siguiente'}
          text={'Siguiente'}
          isDisable={false}
          stylyButton={'buttonEnable'}
          stylyText={'inputButtonEnable'}
          handlerPress={() => handlerPosition(2)}
         />
        </>
       )}

       {position === 2 && (
        <>
         <CustomTextArea
          id={products.fields.dosage.id}
          className={'backgroundField'}
          styleLabel={'label'}
          stylyText={' input'}
          isDisable={false}
          label={products.fields.dosage.label}
          placeholder={products.fields.dosage.placeholder}
          value={props.values.dosage}
          handlerChange={props.handleChange('dosage')}
          hanhandlerBlur={props.handleBlur('dosage')}
          validation={props.errors.dosage && props.touched.dosage}
          messageError={props.errors.dosage}
          isRequeried
         />
         <CustomInput
          id={products.fields.cost.id}
          className={'backgroundField'}
          styleLabel={'label'}
          stylyText={' input'}
          isDisable={false}
          label={products.fields.cost.label}
          placeholder={products.fields.cost.placeholder}
          value={props.values.cost}
          handlerChange={props.handleChange('cost')}
          hanhandlerBlur={props.handleBlur('cost')}
          validation={props.errors.cost && props.touched.cost}
          messageError={props.errors.cost}
          isRequeried
         />
         <CustomInput
          id={products.fields.pvp.id}
          className={'backgroundField'}
          styleLabel={'label'}
          stylyText={' input'}
          isDisable={false}
          label={products.fields.pvp.label}
          placeholder={products.fields.pvp.placeholder}
          value={props.values.pvp}
          handlerChange={props.handleChange('pvp')}
          hanhandlerBlur={props.handleBlur('pvp')}
          validation={props.errors.pvp && props.touched.pvp}
          messageError={props.errors.pvp}
          isRequeried
         />
         <CustomButton
          type={types.button.default}
          title={'Siguiente'}
          text={'Siguiente'}
          isDisable={false}
          stylyButton={'buttonEnable'}
          stylyText={'inputButtonEnable'}
          handlerPress={() => handlerPosition(3)}
         />
        </>
       )}

       {position === 3 && (
        <>
         <CustomPoster
          label={products.fields.photo.label}
          id={'photo'}
          type={types.form.create}
          value={props.values.photo}
          urlImage={String(urlImage)}
          handlerChange={(e) => {
           props.setFieldValue('photo', e.target.files![0]);
          }}
          hanhandlerBlur={props.handleBlur('photo')}
          validation={props.errors.photo && props.touched.photo}
          messageError={props.errors.photo}
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
          stylyButton={'buttonEnable'}
          stylyText={'inputButtonEnable'}
          handlerPress={props.handleSubmit}
         />
        </>
       )}
      </section>
      {type === types.form.edit && props.values.photo && (
       <section className="flex-1 p-8 space-y-8">
        <CustomDetailsProduct
         data={{
          idproduct: props.values.idproduct,
          photo: String(urlImage),
          category: props.values.category,
          laboratory: props.values.laboratory,
          barcode: props.values.barcode,
          product: props.values.product,
          features: props.values.features,
          summary: props.values.summary,
          dosage: props.values.dosage,
          cost: props.values.cost,
          pvp: props.values.pvp,
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
