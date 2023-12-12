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
     <div className={'flex-1 rounded-lg flex flex-col space-y-4 '}>
      <input
       id={'search'}
       type="text"
       value={props.values.search}
       className={'text-form'}
       onBlur={props.handleBlur('search')}
       onChange={props.handleChange('search')}
       placeholder={placeholder}
      />
     </div>
    );
   }}
  </Formik>
 );
};

export { CustomSearch };
