import { statusAction, statusDialog } from '@/constants';
import { StaticImageData } from 'next/image';

/*  */
type typesForm = 'create' | 'edit';

/*  */
interface Search {
 search: string;
}
interface Item {
 id: number | undefined;
 name: string | undefined;
 photo?: string | undefined | null;
}
interface resposeApi {
 id: number;
 message: string;
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

export type { ModalSetting, dialogSetting, Photo, resposeApi, typesForm, Message, Item, Search };
