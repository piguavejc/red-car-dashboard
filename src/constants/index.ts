import data from './data.json';
import { images } from './images';
import { typesIcon } from './icon';
import { typesForm } from './form';
import { typesButton, typesVariantButton } from './button';
import { typesAction } from './action';
import { messageDialog } from './message';
import { typesStatusDialog } from './dialog';

const types = Object.freeze({
 icon: typesIcon,
 form: typesForm,
 button: typesButton,
 action: typesAction,
 dialog: typesStatusDialog,
 variant: {
  button: typesVariantButton,
 },
});

export { types, images, messageDialog, data };
