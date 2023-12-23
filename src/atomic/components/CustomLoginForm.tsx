import { CustomButton, CustomInput } from '@/atomic/elements';
import { Formik, FormikHelpers } from 'formik';
import { CustomLoginFormProps } from '@/types';
import { types, data } from '@/constants';
import { LoginModel } from '@/mvc/models';
import React from 'react';

const { forms } = data.screens.login;

const CustomLoginForm = (props: CustomLoginFormProps) => {
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={props.validation}
   initialValues={props.entity}
   onSubmit={(values: LoginModel, formikHelpers: FormikHelpers<LoginModel>) => {
    formikHelpers.resetForm();
   }}
  >
   {(props) => {
    return (
     <section className="flex-row-start-stretch relative">
      <section className="w-[50%] bg-form basis-full p-8 flex-col-start-stretch rounded-lg">
       <header>
        <h2 className="title-form"> {forms.login.titles.create} </h2>
       </header>

       {/* user  */}
       <CustomInput
        isRequeried
        isDisable={false}
        value={props.values.user}
        id={forms.login.fields.user.id}
        messageError={props.errors.user}
        label={forms.login.fields.user.label}
        placeholder={forms.login.fields.user.placeholder}
        validation={props.errors.user && props.touched.user}
        hanhandlerBlur={props.handleBlur(forms.login.fields.user.id)}
        handlerChange={props.handleChange(forms.login.fields.user.id)}
       />

       {/* password  */}
       <CustomInput
        isRequeried
        isDisable={false}
        value={props.values.password}
        id={forms.login.fields.password.id}
        messageError={props.errors.password}
        label={forms.login.fields.password.label}
        placeholder={forms.login.fields.password.placeholder}
        validation={props.errors.password && props.touched.password}
        hanhandlerBlur={props.handleBlur(forms.login.fields.password.id)}
        handlerChange={props.handleChange(forms.login.fields.password.id)}
       />

       {/* button create or edit  */}
       <CustomButton
        isDisable={!props.isValid}
        type={types.button.default}
        variant={types.variant.button.primary}
        text={forms.login.buttons.create.primary}
        title={forms.login.buttons.create.primary}
        handlerPress={props.handleSubmit}
       />
      </section>
     </section>
    );
   }}
  </Formik>
 );
};

export { CustomLoginForm };
