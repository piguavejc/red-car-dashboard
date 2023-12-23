import { object, string } from 'yup';

const validationLaboratory = object({
 idLaboratory: string(),
 laboratory: string().required('Ingrese un laboratorio'),
});
export { validationLaboratory };
