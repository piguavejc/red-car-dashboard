import { object, string } from 'yup';

const isValidPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validateLogin = object({
 user: string().required('Ingresa un usuario'),
 password: string()
  .matches(isValidPassword, 'La contraseña es insegura')
  .min(8, 'La contraseña debe tener almenos 8 de longitud')
  .max(16, 'La contraseña debe tener almenos 16 de longitud')
  .required('Ingresa una contraseña'),
});
export { validateLogin };
