import data from './data.json';
import { images } from './images';
import { typesIcon } from './icon';
import { typesForm } from './form';
import { typesButton } from './button';
import { messageDialog } from './message';

const typesAction = Object.freeze({
 enable: 'enable',
 create: 'create',
 eliminate: 'eliminate',
 edit: 'edit',
 update: 'update',
 cancel: 'cancel',
});

const typesStatusDialog = Object.freeze({
 success: 200,
 error: 500,
});

const types = Object.freeze({
 icon: typesIcon,
 form: typesForm,
 button: typesButton,
 action: typesAction,
 dialog: typesStatusDialog,
});

export { types, images, messageDialog, data };
