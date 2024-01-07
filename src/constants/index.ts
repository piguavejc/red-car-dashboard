import data from './data.json';
import { images } from './images';
import { typesIcon } from './icon';
import { typesForm } from './form';
import { response } from './response';
import { typesAction } from './action';
import { messageDialog } from './message';
import { typesStatusDialog } from './dialog';
import { typesButton, typesVariantButton } from './button';
import { variant } from './loading';

const types = Object.freeze({
 icon: typesIcon,
 form: typesForm,
 button: typesButton,
 action: typesAction,
 dialog: typesStatusDialog,
 variant: {
  button: typesVariantButton,
 },
 respone: response,
 loading: variant,
});

export { types, images, messageDialog, data };
