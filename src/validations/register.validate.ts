import { object, string, mixed } from 'yup';

const exprePassword = RegExp('^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$');
const expreEmail = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$');

const validateRegister = object({
 user: string().required('Ingresa un usuario'),
 email: string().matches(expreEmail, 'El correo es incorrecto').required('Ingresa un correo'),
 names: string().required('Ingresa tus nombres'),
 cedula: string().required('Ingresa tu cedula'),
 password: string()
  .matches(exprePassword, 'La contraseña es insegura')
  .required('Ingresa un contraseña'),
 photo: mixed()
  .required('La foto es Requerido')
  .test('is-image', 'El archivo no es una imagen válida', (value: any) => {
   if (!value) return true; // Permitir valores nulos o indefinidos
   const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
   return supportedFormats.includes(value.type);
  })
  .test('file-size', 'El archivo es demasiado grande', (value: any) => {
   if (!value) return true; // Permitir valores nulos o indefinidos
   const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
   return value.size <= maxSizeInBytes;
  }),
});

export { validateRegister };
