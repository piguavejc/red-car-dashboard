import { object, string } from 'yup';

const isValidPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

const validateRegister = object({
 user: string().required('Ingresa un usuario'),
 email: string().matches(isValidEmail, 'El correo es incorrecto').required('Ingresa un correo'),
 names: string().required('Ingresa tus nombres'),
 cedula: string().required('Ingresa tu cedula'),
 password: string()
  .matches(isValidPassword, 'La contraseña es insegura')
  .min(8, 'La contraseña debe tener almenos 8 de longitud')
  .max(16, 'La contraseña debe tener almenos 16 de longitud')
  .required('Ingresa un contraseña'),
});

export { validateRegister };
