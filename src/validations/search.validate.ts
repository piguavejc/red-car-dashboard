import { object, string } from 'yup';

const validationSearch = object({
 search: string(),
});

export { validationSearch };
