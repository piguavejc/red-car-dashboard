import { CustomButton, CustomInput, CustomPoster } from '@/atomic/elements';
import { CustomLaboratoryFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { LaboratoryModel } from '@/mvc/models';
import { typesButton, typesForm } from '@/constants';
import React from 'react';
import { Oval } from 'react-loader-spinner';

const content = Object.freeze({
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
 load: 'Espere mientras se guardan los datos',
});

const CustomLaboratoryForm = (props: CustomLaboratoryFormProps) => {
 const { type } = props;
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
        {type === typesForm.create ? content.create.title : content.edit.title}
       </h2>
      </header>
      {/* input laboratory  */}
      <CustomInput
       isRequeried
       id={content.laboratory.id}
       className={'backgroundField'}
       styleLabel={'label'}
       stylyText={' input'}
       isDisable={false}
       label={content.laboratory.label}
       placeholder={content.laboratory.placeholder}
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
      {/* button secondary  */}
      <CustomButton
       title={content.button.secundary}
       text={content.button.secundary}
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
