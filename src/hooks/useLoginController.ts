import { LoginModel } from '@/mvc/models';
import { useState } from 'react';

const useLoginController = () => {
 const [login, setLogin] = useState<LoginModel>({
  user: undefined,
  password: undefined,
 });

 return { login };
};
export { useLoginController };
