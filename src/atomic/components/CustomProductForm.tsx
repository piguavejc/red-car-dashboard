import React from 'react';
import { CustomButton, CustomInput, CustomPoster } from '@/atomic/elements';
import { CustomProductFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { ProductModel } from '@/mvc/models';
import { typesButton, typesForm } from '@/constants';
import { useProgressBar, useCategoryController, useLaboratoryController } from '@/hooks';
import { CustomProgressBar, CustomSelect } from '.';
import { Oval } from 'react-loader-spinner';

const content = Object.freeze({
 edit: {
  title: 'Edita un producto',
 },
 create: {
  title: 'Crea un producto',
 },
 product: {
  id: 'product',
  label: 'Producto',
  placeholder: 'Ej: Labmac',
 },
 category: {
  id: 'category',
  label: 'Categoria',
  placeholder: 'Ej: Labmac',
 },
 laboratory: {
  id: 'laboratory',
  label: 'Laboratorio',
  placeholder: 'Ej: Labmac',
 },
 barcode: {
  id: 'barcode',
  label: 'Codigo de barra',
  placeholder: 'Ej: Labmac',
 },
 features: {
  id: 'features',
  label: 'Descripcion',
  placeholder: 'Ej: Labmac',
 },
 summary: {
  id: 'summary',
  label: 'Componentes',
  placeholder: 'Ej: Labmac',
 },
 dosage: {
  id: 'dosage',
  label: 'dosis',
  placeholder: 'Ej: Labmac',
 },
 cost: {
  id: 'cost',
  label: 'Costo',
  placeholder: 'Ej: Labmac',
 },
 pvp: {
  id: 'pvp',
  label: 'Pvp',
  placeholder: 'Ej: Labmac',
 },
 photo: {
  id: 'product',
  label: 'Foto producto',
  placeholder: 'Ej: Labmac',
 },
 button: {
  create: {
   primary: 'Guardar producto',
  },
  edit: {
   primary: 'Guardar cambios',
  },
  secundary: 'Limpiar el formulario',
 },
 load: 'Espere mientras se guardan los datos',
});

const CustomProductForm = (props: CustomProductFormProps) => {
 const { type } = props;
 const { items, position, handlerPosition } = useProgressBar(4);

 const { categories } = useCategoryController();
 const { laboratories } = useLaboratoryController();

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
    <p className="text-2xl font-semibold text-slate-100"> {content.load} </p>
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
    return (
     <section className="backgroundForm p-8 basis-full flexColStart  rounded-lg">
      <CustomProgressBar items={items} handlerItem={handlerPosition} posiition={position} />
      <header>
       <h2 className="colorTitleForm">
        {type === typesForm.create ? content.create.title : content.edit.title}{' '}
       </h2>
      </header>
      {position === 0 && (
       <>
        <CustomSelect
         stylyLabel={'label'}
         stylySelect={'inputSelectEnable'}
         label={content.category.label}
         value={props.values.category}
         data={categories}
         id={content.category.id}
         handlerChange={(value) => {
          props.setFieldValue(content.category.id, value);
         }}
         isRequeried
        />
        <CustomSelect
         stylyLabel={'label'}
         stylySelect={'inputSelectEnable'}
         label={content.laboratory.label}
         value={props.values.laboratory}
         data={laboratories}
         id={content.laboratory.id}
         handlerChange={(value) => {
          props.setFieldValue(content.laboratory.id, value);
         }}
         isRequeried
        />
        <CustomInput
         id={content.product.id}
         className={'backgroundField'}
         styleLabel={'label'}
         stylyText={' input'}
         isDisable={false}
         label={content.product.label}
         placeholder={content.product.placeholder}
         value={props.values.product}
         handlerChange={props.handleChange('product')}
         hanhandlerBlur={props.handleBlur('product')}
         validation={props.errors.product && props.touched.product}
         messageError={props.errors.product}
         isRequeried
        />
        <CustomButton
         type={typesButton.default}
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
         id={content.barcode.id}
         className={'backgroundField'}
         styleLabel={'label'}
         stylyText={' input'}
         isDisable={false}
         label={content.barcode.label}
         placeholder={content.barcode.placeholder}
         value={props.values.barcode}
         handlerChange={props.handleChange('barcode')}
         hanhandlerBlur={props.handleBlur('barcode')}
         validation={props.errors.barcode && props.touched.barcode}
         messageError={props.errors.barcode}
        />
        <CustomInput
         id={content.features.id}
         className={'backgroundField'}
         styleLabel={'label'}
         stylyText={' input'}
         isDisable={false}
         label={content.features.label}
         placeholder={content.features.placeholder}
         value={props.values.features}
         handlerChange={props.handleChange('features')}
         hanhandlerBlur={props.handleBlur('features')}
         validation={props.errors.features && props.touched.features}
         messageError={props.errors.features}
         isRequeried
        />
        <CustomInput
         id={content.summary.id}
         className={'backgroundField'}
         styleLabel={'label'}
         stylyText={' input'}
         isDisable={false}
         label={content.summary.label}
         placeholder={content.summary.placeholder}
         value={props.values.summary}
         handlerChange={props.handleChange('summary')}
         hanhandlerBlur={props.handleBlur('summary')}
         validation={props.errors.summary && props.touched.summary}
         messageError={props.errors.summary}
         isRequeried
        />
        <CustomButton
         type={typesButton.default}
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
        <CustomInput
         id={content.dosage.id}
         className={'backgroundField'}
         styleLabel={'label'}
         stylyText={' input'}
         isDisable={false}
         label={content.dosage.label}
         placeholder={content.dosage.placeholder}
         value={props.values.dosage}
         handlerChange={props.handleChange('dosage')}
         hanhandlerBlur={props.handleBlur('dosage')}
         validation={props.errors.dosage && props.touched.dosage}
         messageError={props.errors.dosage}
         isRequeried
        />
        <CustomInput
         id={content.cost.id}
         className={'backgroundField'}
         styleLabel={'label'}
         stylyText={' input'}
         isDisable={false}
         label={content.cost.label}
         placeholder={content.cost.placeholder}
         value={props.values.cost}
         handlerChange={props.handleChange('cost')}
         hanhandlerBlur={props.handleBlur('cost')}
         validation={props.errors.cost && props.touched.cost}
         messageError={props.errors.cost}
         isRequeried
        />
        <CustomInput
         id={content.pvp.id}
         className={'backgroundField'}
         styleLabel={'label'}
         stylyText={' input'}
         isDisable={false}
         label={content.pvp.label}
         placeholder={content.pvp.placeholder}
         value={props.values.pvp}
         handlerChange={props.handleChange('pvp')}
         hanhandlerBlur={props.handleBlur('pvp')}
         validation={props.errors.pvp && props.touched.pvp}
         messageError={props.errors.pvp}
         isRequeried
        />
        <CustomButton
         type={typesButton.default}
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
         id={'photo'}
         type={typesForm.create}
         value={props.values.photo}
         handlerChange={(e) => {
          props.setFieldValue('photo', e.target.files![0]);
         }}
         hanhandlerBlur={props.handleBlur('photo')}
         setUrlImageLocal={(image: string) => {}}
         validation={props.errors.photo && props.touched.photo}
         messageError={props.errors.photo}
        />
        <CustomButton
         type={typesButton.default}
         title={
          type === typesForm.create ? content.button.create.primary : content.button.edit.primary
         }
         text={
          type === typesForm.create ? content.button.create.primary : content.button.edit.primary
         }
         isDisable={!props.isValid}
         stylyButton={'buttonEnable'}
         stylyText={'inputButtonEnable'}
         handlerPress={props.handleSubmit}
        />
       </>
      )}
     </section>
    );
   }}
  </Formik>
 );
};

export { CustomProductForm };
