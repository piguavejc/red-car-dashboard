import { CustomSearchFormProps } from '@/types';
import { CustomInput } from '@/atomic/elements';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';

const CustomSearch = (props: CustomSearchFormProps) => {
 const { placeholder, handlerSubmit } = props;
 return (
  <Formik
   validationSchema={props.validationSchema}
   enableReinitialize={true}
   initialValues={props.entity}
   onSubmit={(values: { search: string }, formikHelpers: FormikHelpers<{ search: string }>) => {
    props.handlerSubmit(values);
    formikHelpers.resetForm();
   }}
  >
   {(props) => {
    handlerSubmit({ search: props.values.search });
    return (
     <CustomInput
      id={'search'}
      className={'flex-1 rounded-lg flex flex-col space-y-4 '}
      styleLabel={'text-xl font-semibold'}
      stylyText={'input '}
      isDisable={false}
      placeholder={placeholder}
      value={props.values.search}
      validation={props.errors.search && props.touched.search}
      messageError={props.errors.search}
      handlerChange={props.handleChange('search')}
      hanhandlerBlur={props.handleBlur('search')}
     />
    );
   }}
  </Formik>
 );
};

export { CustomSearch };
