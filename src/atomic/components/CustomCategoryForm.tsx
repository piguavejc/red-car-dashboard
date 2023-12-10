import { CustomButton, CustomInput, CustomPoster } from '@/atomic/elements';
import { CustomCategoryFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { CategoryModel } from '@/mvc/models';
import { Oval } from 'react-loader-spinner';
import { CustomDetailsCategory } from '.';
import { types, data } from '@/constants';
import { usePoster } from '@/hooks';
import React from 'react';

const { category } = data.screens.dashboard.forms;

const CustomCategoryForm = (props: CustomCategoryFormProps) => {
 const { type } = props;
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
    <p className="text-2xl font-semibold text-slate-100"> {category.load} </p>
   </div>
  );
 }
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
    if (props.values.photo) handlerPoster(props.values.photo);
    return (
     <section className="flex-1 flex flex-row justify-start items-stretch relative space-x-4">
      <section className="backgroundForm basis-full p-8 flexColStart rounded-lg">
       <header>
        <h2 className="colorTitleForm">
         {type === types.form.create ? category.titles.create : category.titles.edit}
        </h2>
       </header>
       {/* Poster */}
       <CustomPoster
        label={category.fields.photo.label}
        id={'photo'}
        type={types.form.create}
        value={props.values.photo}
        handlerChange={(e) => {
         props.setFieldValue('photo', e.target.files![0]);
        }}
        urlImage={String(urlImage)}
        hanhandlerBlur={props.handleBlur('photo')}
        validation={props.errors.photo && props.touched.photo}
        messageError={props.errors.photo}
       />
       {/* Category  */}
       <CustomInput
        isRequeried
        id={category.fields.category.id}
        className={'backgroundField'}
        styleLabel={'label'}
        stylyText={'input p-2 rounded-lg'}
        isDisable={false}
        label={category.fields.category.label}
        placeholder={category.fields.category.placeholder}
        value={props.values.category}
        handlerChange={props.handleChange('category')}
        hanhandlerBlur={props.handleBlur('category')}
        validation={props.errors.category && props.touched.category}
        messageError={props.errors.category}
       />
       {/* button create or edit  */}
       <CustomButton
        type={types.button.default}
        isDisable={!props.isValid}
        stylyButton={'buttonEnable'}
        stylyText={'inputButtonEnable'}
        text={
         type === types.form.create
          ? category.buttons.create.primary
          : category.buttons.edit.primary
        }
        title={
         type === types.form.create
          ? category.buttons.create.primary
          : category.buttons.edit.primary
        }
        handlerPress={props.handleSubmit}
       />
       {/* button secondary */}
       <CustomButton
        title={category.buttons.secundary}
        text={category.buttons.secundary}
        type={types.button.default}
        isDisable={false}
        stylyButton={'buttonDisable'}
        stylyText={'inputButtonDisable'}
        handlerPress={props.resetForm}
       />
      </section>
      {type === types.form.edit && props.values.photo && (
       <section className="flex-1 flex flex-col justify-stretch items-center p-8 space-y-4">
        <h1 className="colorTitleForm">{category.titles.detail}</h1>
        <CustomDetailsCategory
         data={{
          idcategory: props.values.idcategory,
          category: props.values.category,
          idphoto: props.values.idphoto,
          photo: String(urlImage),
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

export { CustomCategoryForm };
