import { CustomButton, CustomInput, CustomPoster } from '@/atomic/elements';
import { CustomLaboratoryFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { LaboratoryModel } from '@/mvc/models';
import { typesButton, typesForm } from '@/constants';
import React from 'react';

const contentLaboratoryForm = Object.freeze({
 edit: {
  title: 'Edita un laboratorio',
 },
 create: {
  title: 'Crea un laboratorio',
 },
 laboratory: {
  id: 'laboratory',
  label: 'Laboratorio',
  placeholder: 'Ej: Labmac',
 },
 button: {
  create: {
   primary: 'Guardar el laboratorio',
  },
  edit: {
   primary: 'Guardar cambios',
  },
  secundary: 'Limpiar el formulario',
 },
});

const CustomLaboratoryForm = (props: CustomLaboratoryFormProps) => {
 const { type } = props;
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={props.validationSchema}
   initialValues={props.entity}
   onSubmit={(values: LaboratoryModel, formikHelpers: FormikHelpers<LaboratoryModel>) => {
    props.handlerSubmit(values);
    formikHelpers.resetForm();
   }}
  >
   {(props) => {
    return (
     <section className="backgroundForm p-8 basis-full flexColStart rounded-lg">
      <header>
       <h2 className="colorTitleForm">
        {type === typesForm.create
         ? contentLaboratoryForm.create.title
         : contentLaboratoryForm.edit.title}
       </h2>
      </header>
      {/* input laboratory  */}
      <CustomInput
       isRequeried
       id={contentLaboratoryForm.laboratory.id}
       className={'backgroundField'}
       styleLabel={'label'}
       stylyText={' input'}
       isDisable={false}
       label={contentLaboratoryForm.laboratory.label}
       placeholder={contentLaboratoryForm.laboratory.placeholder}
       value={props.values.laboratory}
       handlerChange={props.handleChange('laboratory')}
       hanhandlerBlur={props.handleBlur('laboratory')}
       validation={props.errors.laboratory && props.touched.laboratory}
       messageError={props.errors.laboratory}
      />
      {/* button create or edit*/}
      <CustomButton
       type={typesButton.default}
       title={
        type === typesForm.create
         ? contentLaboratoryForm.button.create.primary
         : contentLaboratoryForm.button.edit.primary
       }
       text={
        type === typesForm.create
         ? contentLaboratoryForm.button.create.primary
         : contentLaboratoryForm.button.edit.primary
       }
       isDisable={!props.isValid}
       stylyButton={'buttonEnable'}
       stylyText={'inputButtonEnable'}
       handlerPress={props.handleSubmit}
      />
      {/* button secondary  */}
      <CustomButton
       title={contentLaboratoryForm.button.secundary}
       text={contentLaboratoryForm.button.secundary}
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

export { CustomLaboratoryForm };
