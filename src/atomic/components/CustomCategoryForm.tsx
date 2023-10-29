import { CustomButton, CustomInput, CustomPoster } from '@/atomic/elements';
import { CustomCategoryFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { CategoryModel } from '@/mvc/models';
import { typesButton, typesForm } from '@/constants';
import React from 'react';

const contentCategoryForm = Object.freeze({
 edit: {
  title: 'Edita la categoria',
 },
 create: {
  title: 'Crea una categoria',
 },
 category: {
  id: 'category',
  label: 'Categoria',
  placeholder: 'Ej: Cerebro',
 },
 button: {
  create: {
   primary: 'Guardar la categoria',
  },
  edit: {
   primary: 'Guardar cambios',
  },
  secundary: 'Limpiar el formulario',
 },
});

const CustomCategoryForm = (props: CustomCategoryFormProps) => {
 const { type } = props;
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={props.validationSchema}
   initialValues={props.entity}
   onSubmit={(values: CategoryModel, formikHelpers: FormikHelpers<CategoryModel>) => {
    props.handlerSubmit(values);
    formikHelpers.resetForm();
   }}
  >
   {(props) => {
    return (
     <section className="backgroundForm basis-full p-8 flexColStart rounded-lg">
      <header>
       <h2 className="colorTitleForm">
        {type === typesForm.create
         ? contentCategoryForm.create.title
         : contentCategoryForm.edit.title}
       </h2>
      </header>
      {/* Poster */}
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
      {/* Category  */}
      <CustomInput
       isRequeried
       id={contentCategoryForm.category.id}
       className={'backgroundField'}
       styleLabel={'label'}
       stylyText={'input p-2 rounded-lg'}
       isDisable={false}
       label={contentCategoryForm.category.label}
       placeholder={contentCategoryForm.category.placeholder}
       value={props.values.category}
       handlerChange={props.handleChange('category')}
       hanhandlerBlur={props.handleBlur('category')}
       validation={props.errors.category && props.touched.category}
       messageError={props.errors.category}
      />
      {/* button create or edit  */}
      <CustomButton
       type={typesButton.default}
       isDisable={!props.isValid}
       stylyButton={'buttonEnable'}
       stylyText={'inputButtonEnable'}
       text={
        type === typesForm.create
         ? contentCategoryForm.button.create.primary
         : contentCategoryForm.button.edit.primary
       }
       title={
        type === typesForm.create
         ? contentCategoryForm.button.create.primary
         : contentCategoryForm.button.edit.primary
       }
       handlerPress={props.handleSubmit}
      />
      {/* button secondary */}
      <CustomButton
       title={contentCategoryForm.button.secundary}
       text={contentCategoryForm.button.secundary}
       type={typesButton.default}
       isDisable={false}
       stylyButton={'buttonDisable'}
       stylyText={'inputButtonDisable'}
       handlerPress={props.resetForm}
      />
     </section>
    );
   }}
  </Formik>
 );
};

export { CustomCategoryForm };
