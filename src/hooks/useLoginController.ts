import { LoginModel } from '@/mvc/models';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const useLoginController = () => {
 const router = useRouter();
 const [login, setLogin] = useState<LoginModel>({
  user: undefined,
  password: undefined,
 });

 const handlerLogin = async (values: LoginModel) => {
  try {
   await signIn('credentials', {
    email: values.user,
    password: values.password,
    redirect: false,
   });
   router.push('/dashboard');
  } catch (error) {
   console.log(error);
  }
 };
 return { login, handlerLogin };
};
export { useLoginController };
