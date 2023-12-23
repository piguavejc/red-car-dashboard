import { validationLaboratory } from './laboratory.validate';
import { validationCategory } from './category.validate';
import { validationProduct } from './product.validate';
import { validateRegister } from './register.validate';
import { validationSearch } from './search.validate';
import { validateLogin } from './login.validate';

const validate = Object.freeze({
 login: validateLogin,
 search: validationSearch,
 register: validateRegister,
 product: validationProduct,
 category: validationCategory,
 laboratory: validationLaboratory,
});
export { validate };
