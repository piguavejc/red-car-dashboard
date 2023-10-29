import { Message } from '@/types';
const ModalUpdateCreditDebtConst = Object.freeze<Message>({
 title: 'Actualizacion de abono de deuda',
 text: 'Se ha abonado esta cantidad: ',
});

const ModalUpdateDebtConst = Object.freeze<Message>({
 title: 'Actualizacion de la informacion de la deuda',
 text: 'Se ha modificado correctamente la informacion de la deuda. De: ',
});
const ModalCommunityConst = Object.freeze<Message>({
 title: 'Lista de las comunidades',
 text: 'Obteniendo los datos por favor espere...',
});

const modalCancelDebtConst = Object.freeze<Message>({
 title: 'Mensaje de cancelacion de deudad',
 text: 'Se ha cancelado correctamente la deuda. De:',
});
const modalAddDebtConst = Object.freeze<Message>({
 title: 'Mensaje de creacion',
 text: 'Se ha creado la deuda. De: ',
});
const modalEnableCommunityConst = Object.freeze<Message>({
 title: 'Mensaje de habilitacion',
 text: 'Se habilitado nuevamente la comunidad: ',
});

const modalDeleteCommunityConst = Object.freeze<Message>({
 title: 'Mensaje de eliminacion',
 text: 'Se ha eliminado correctamente la comunidad: ',
});
const typesStatusModal = Object.freeze({
 success: 'success',
 error: 'error',
});
type statusModal = 'success' | 'error';

export type { statusModal };
export {
 typesStatusModal,
 modalAddDebtConst,
 ModalUpdateDebtConst,
 ModalCommunityConst,
 modalCancelDebtConst,
 ModalUpdateCreditDebtConst,
 modalEnableCommunityConst,
 modalDeleteCommunityConst,
};
