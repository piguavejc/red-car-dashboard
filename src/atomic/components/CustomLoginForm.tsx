import { CustomButton, CustomInput, CustomPassword } from '@/atomic/elements';
import { Formik, FormikHelpers } from 'formik';
import { CustomLoginFormProps } from '@/types';
import { types, data, images } from '@/constants';
import { LoginModel } from '@/mvc/models';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const { forms } = data.screens.login;

const CustomLoginForm = (props: CustomLoginFormProps) => {
 const route = useRouter();
 const handlerPage = () => {
  route.push('/register');
 };
 return (
  <Formik
   enableReinitialize={true}
   validationSchema={props.validation}
   initialValues={props.entity}
   onSubmit={(values: LoginModel, formikHelpers: FormikHelpers<LoginModel>) => {
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

       <Image
        className="self-center"
        src={images.avatar.src}
        alt={images.avatar.alt}
        title={images.avatar.title}
        width={150}
        height={150}
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

       {/* button login  */}
       <CustomButton
        isDisable={!props.isValid}
        type={types.button.default}
        variant={types.variant.button.primary}
        text={forms.login.buttons.create.primary}
        title={forms.login.buttons.create.primary}
        handlerPress={props.handleSubmit}
       />
       <p className="default-text-bold">o</p>
       {/* button register  */}
       <CustomButton
        type={types.button.default}
        variant={types.variant.button.secondary}
        text={forms.login.buttons.register.primary}
        title={forms.login.buttons.register.primary}
        handlerPress={handlerPage}
       />
      </section>
     </section>
    );
   }}
  </Formik>
 );
};

export { CustomLoginForm };
