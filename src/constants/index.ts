import { Message } from '@/types';

/*  */
const messageRefresh = Object.freeze<Message>({
 title: 'Message loading',
 text: 'please wait ...',
});

/*  */
type statusAction = 'enable' | 'create' | 'eliminate' | 'edit' | 'cancel' | 'update';
const typesAction = Object.freeze({
 enable: 'enable',
 create: 'create',
 eliminate: 'eliminate',
 edit: 'edit',
 update: 'update',
 cancel: 'cancel',
});

/*  */
type statusDialog = 200 | 500;
const typesStatusDialog = Object.freeze({
 success: 200,
 error: 500,
});
export { images } from './images.const';
export { typesIcon } from './icon.const';
export { typesForm } from './form.const';
export { messageDialog } from './message';
export { typesButton } from './button.const';
export { statusLoad } from './loading.const';
export { typesAction, messageRefresh, typesStatusDialog };

export type { statusIcon } from './icon.const';
export type { statusForm } from './form.const';
export type { statusDialog, statusAction };
export type { statusButton } from './button.const';
