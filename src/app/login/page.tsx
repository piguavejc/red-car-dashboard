'use client';
import { useHeader, useLoginController, useRegisterController } from '@/hooks';
import { CustomLoginForm, CustomMessageError, CustomRegisterForm } from '@/atomic/components';
import { CustomHeader, CustomModal } from '@/atomic/designs';
import { validate } from '@/validations';
import { data } from '@/constants';
import React from 'react';

const { secctions } = data.screens.login;

export default function Login() {
 const { login } = useLoginController();
 const { register, modalSetting, existError, messageError, handlerCreate, handlerLogin } =
  useRegisterController();
 const { headers, target, handlerTarger } = useHeader(secctions.names);

 /* modal */
 if (modalSetting.isActivate) {
  return (
   <div className="windowSecundary">
    <div className="w-[90%] lg:w-[50%]">
     <CustomModal setting={modalSetting} />
    </div>
   </div>
  );
 }

 /* error */

 if (existError) return <CustomMessageError message={messageError} />;

 return (
  <div className="w-full h-screen bg-helper flex-col-center-center">
   <CustomHeader list={headers} target={target} hanlderTarget={handlerTarger} />
   {secctions.names[target] === secctions.login ? (
    <CustomLoginForm entity={login} validation={validate.login} hnalderSubmit={handlerLogin} />
   ) : (
    <CustomRegisterForm
     entity={register}
     validation={validate.register}
     hnalderSubmit={handlerCreate}
    />
   )}
  </div>
 );
}
