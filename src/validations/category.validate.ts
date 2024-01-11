import { object, string, mixed } from 'yup';

const validationCategory = object({
 category: string().required('Ingrese una categoria'),
 photo: mixed()
  .required('La foto es Requerido')
  .test('is-image', 'El archivo no es una imagen válida', (value) => {
   const data: File = value as File;
   if (!data) return true; // Permitir valores nulos o indefinidos
   const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
   return supportedFormats.includes(data.type);
  })
  .test('file-size', 'El archivo es demasiado grande', (value) => {
   const data: File = value as File;
   if (!data) return true; // Permitir valores nulos o indefinidos
   const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
   return data.size <= maxSizeInBytes;
  }),
});
export { validationCategory };
