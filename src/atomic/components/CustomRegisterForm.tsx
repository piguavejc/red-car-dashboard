import { CustomButton, CustomInput, CustomPassword } from '@/atomic/elements';
import { CustomRegisterFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { RegisterModel } from '@/mvc/models';
import { types, data } from '@/constants';
import React from 'react';

const { forms } = data.screens.register;

const CustomRegisterForm = (props: CustomRegisterFormProps) => {
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={props.validation}
   initialValues={props.entity}
   onSubmit={(values: RegisterModel, formikHelpers: FormikHelpers<RegisterModel>) => {
    formikHelpers.resetForm();
    props.hnalderSubmit(values);
   }}
  >
   {(props) => {
    return (
     <section className="flex-row-start-stretch relative">
      <section className="w-[50%] bg-form basis-full p-8 flex-col-start-stretch rounded-lg">
       <header>
        <h2 className="title-form"> {forms.login.titles.create} </h2>
       </header>
       {/* cedula  */}
       <CustomInput
        isRequeried
        isDisable={false}
        value={props.values.cedula}
        id={forms.login.fields.cedula.id}
        messageError={props.errors.cedula}
        label={forms.login.fields.cedula.label}
        placeholder={forms.login.fields.cedula.placeholder}
        validation={props.errors.cedula && props.touched.cedula}
        hanhandlerBlur={props.handleBlur(forms.login.fields.cedula.id)}
        handlerChange={props.handleChange(forms.login.fields.cedula.id)}
       />
       {/* names  */}
       <CustomInput
        isRequeried
        isDisable={false}
        value={props.values.names}
        id={forms.login.fields.names.id}
        messageError={props.errors.names}
        label={forms.login.fields.names.label}
        placeholder={forms.login.fields.names.placeholder}
        validation={props.errors.names && props.touched.names}
        hanhandlerBlur={props.handleBlur(forms.login.fields.names.id)}
        handlerChange={props.handleChange(forms.login.fields.names.id)}
       />
       {/* email  */}
       <CustomInput
        isRequeried
        isDisable={false}
        value={props.values.email}
        id={forms.login.fields.email.id}
        messageError={props.errors.email}
        label={forms.login.fields.email.label}
        placeholder={forms.login.fields.email.placeholder}
        validation={props.errors.email && props.touched.email}
        hanhandlerBlur={props.handleBlur(forms.login.fields.email.id)}
        handlerChange={props.handleChange(forms.login.fields.email.id)}
       />
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
       <CustomPassword
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
       {/* button secondary */}
       <CustomButton
        isDisable={false}
        type={types.button.default}
        text={forms.login.buttons.secundary}
        title={forms.login.buttons.secundary}
        variant={types.variant.button.secondary}
        handlerPress={props.resetForm}
       />
      </section>
     </section>
    );
   }}
  </Formik>
 );
};

export { CustomRegisterForm };
