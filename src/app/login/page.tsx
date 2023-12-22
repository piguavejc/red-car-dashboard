'use client';
import { useHeader, useLoginController, useRegisterController } from '@/hooks';
import { CustomLoginForm, CustomRegisterForm } from '@/atomic/components';
import { CustomHeader } from '@/atomic/designs';
import { validate } from '@/validations';
import { data } from '@/constants';
import React from 'react';

const { secctions } = data.screens.login;

export default function Login() {
 const { login } = useLoginController();
 const { register } = useRegisterController();
 const { headers, target, handlerTarger } = useHeader(secctions.names);

 return (
  <div className="w-full h-screen bg-helper flex-col-center-center">
   <CustomHeader list={headers} target={target} hanlderTarget={handlerTarger} />
   {secctions.names[target] === secctions.login ? (
    <CustomLoginForm entity={login} validation={validate.login} />
   ) : (
    <CustomRegisterForm entity={register} validation={validate.register} />
   )}
  </div>
 );
}
