import { object, string } from 'yup';

const validateLogin = object({
 user: string().required('Ingresa un usuario'),
 password: string().required('Ingresa una contraseña'),
});
export { validateLogin };
