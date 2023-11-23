import { CustomButton, CustomInput, CustomPoster } from '@/atomic/elements';
import { typesButton, typesForm } from '@/constants';
import { CustomCategoryFormProps } from '@/types';
import { Formik, FormikHelpers } from 'formik';
import { CategoryModel } from '@/mvc/models';
import React from 'react';
import { Oval } from 'react-loader-spinner';
import { CustomDetailsCategory } from '.';

const content = Object.freeze({
 edit: {
  title: 'Edita la categoria',
 },
 create: {
  title: 'Crea una categoria',
 },
 detail: {
  title: 'Detalles de la categoria',
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
 load: 'Espere mientras se guardan los datos',
});

const CustomCategoryForm = (props: CustomCategoryFormProps) => {
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
   onSubmit={(values: CategoryModel, formikHelpers: FormikHelpers<CategoryModel>) => {
    props.handlerSubmit(values);
    formikHelpers.resetForm();
   }}
  >
   {(props) => {
    return (
     <section className="flex-1 flex flex-row justify-start items-start relative space-x-4">
      <section className="backgroundForm basis-full p-8 flexColStart rounded-lg">
       <header>
        <h2 className="colorTitleForm">
         {type === typesForm.create ? content.create.title : content.edit.title}
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
        id={content.category.id}
        className={'backgroundField'}
        styleLabel={'label'}
        stylyText={'input p-2 rounded-lg'}
        isDisable={false}
        label={content.category.label}
        placeholder={content.category.placeholder}
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
         type === typesForm.create ? content.button.create.primary : content.button.edit.primary
        }
        title={
         type === typesForm.create ? content.button.create.primary : content.button.edit.primary
        }
        handlerPress={props.handleSubmit}
       />
       {/* button secondary */}
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
      {type === typesForm.edit && props.values.photo && (
       <section className="flex-1 p-8 space-y-4">
        <h1 className="colorTitleForm">{content.detail.title}</h1>
        <CustomDetailsCategory
         data={{
          idcategory: props.values.idcategory,
          category: props.values.category,
          idphoto: props.values.idphoto,
          photo: props.values.photo,
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
