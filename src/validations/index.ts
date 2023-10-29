import { object, string, mixed } from 'yup';

const validationCategory = object({
 category: string().required('Ingrese una categoria'),
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

const validationLaboratory = object({
 idLaboratory: string(),
 laboratory: string().required('Ingrese un laboratorio'),
});

const validationProduct = object({
 idproduct: string(),
 category: string().required('Requerido la categoria'),
 laboratory: string().required('Requerido el laboratorio'),
 barcode: string().matches(/^\d{13}$/, 'Ingrede un codigo de barra valido'),
 product: string().required('Requerido el producto'),
 features: string().required('Requerido features'),
 summary: string().required('Requerido summary'),
 dosage: string().required('Requerido dosage'),
 cost: string()
  .required('Requerido cost')
  .matches(/^\d+(\.\d{1,2})?$/, 'Ingrese un pvp valido'),
 pvp: string()
  .required('Requerido el pvp')
  .matches(/^\d+(\.\d{1,2})?$/, 'Ingrese un pvp valido'),
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

const validationSearch = object({
 search: string(),
});

export { validationCategory, validationLaboratory, validationSearch, validationProduct };
