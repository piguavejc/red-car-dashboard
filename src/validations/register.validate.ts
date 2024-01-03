import { object, string, mixed } from 'yup';

const exprePassword = RegExp('^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$');
const expreEmail = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$');

const validateRegister = object({
 user: string().required('Ingresa un usuario'),
 email: string().matches(expreEmail, 'El correo es incorrecto').required('Ingresa un correo'),
 names: string().required('Ingresa tus nombres'),
 cedula: string().required('Ingresa tu cedula'),
 password: string()
  // .matches(exprePassword, 'La contraseña es insegura')
  .required('Ingresa un contraseña'),
});

export { validateRegister };
