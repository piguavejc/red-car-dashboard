import { StaticImageData } from 'next/image';

/*  */
interface Search {
 search: string;
}
interface Item {
 id: number | undefined;
 name: string | undefined;
 photo?: string | undefined | null;
}

/*  */
interface Message {
 title: string | undefined;
 text: string | undefined;
}
interface Photo {
 title: string;
 src: StaticImageData;
 alt: string;
}
interface dialogSetting {
 isActivate: boolean;
 content:
  | {
     message: Message;
     name: string;
    }
  | undefined;
 resetAll: () => void;
 handlerHidde: () => void;
 handlerAppear: (name: string, type: statusAction, message: string) => void;
 handlerVerify: (status: boolean) => boolean;
}
interface ModalSetting {
 isActivate: boolean;
 type: statusDialog | undefined;
 message: string | undefined;
 handlerHidde: () => void;
 handlerAppear: () => void;
 handlerStatus: (status: boolean, type: statusDialog, message: string) => void;
}

/*  */
type statusAction = 'enable' | 'create' | 'eliminate' | 'edit' | 'cancel' | 'update';
/* types icons */
type statusIcon =
 | 'eye'
 | 'edit'
 | 'menu'
 | 'plus'
 | 'close'
 | 'eyeOff'
 | 'enable'
 | 'create'
 | 'detail'
 | 'goBack'
 | 'refresh'
 | 'whatsapp'
 | 'eliminated'
 | 'facebook';

/* types form */
type statusForm = 'create' | 'edit';
/*  */
type statusButton = 'default' | 'icon' | 'iconText';
/*  */
type statusDialog = 200 | 500;
/*  */
type variantButton = 'primary' | 'secondary' | 'disabled';

type variantLoading = 'normal' | 'list-vertical' | 'list-horizontal' | 'grid' | 'image-rounded';
export type {
 Item,
 Photo,
 Search,
 Message,
 statusIcon,
 statusForm,
 statusButton,
 ModalSetting,
 statusDialog,
 statusAction,
 variantButton,
 dialogSetting,
 variantLoading,
};
