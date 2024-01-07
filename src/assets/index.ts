import whatsapp from '../../public/assets/whatsapp-removebg-preview.png';
import prostaeros from '../../public/assets/prosta-eros.jpg';
import facebook from '../../public/assets/facebook.png';
import warning from '../../public/assets/warning.png';
import success from '../../public/assets/success.png';
import redCar from '../../public/assets/red-car.png';
import empty from '../../public/assets/empty.png';
import load from '../../public/assets/load.png';
import avatar from '../../public/assets/user-avatar.svg';

const assets = Object.freeze({
 images: {
  warning: {
   title: 'Advertencia',
   alt: 'imagen de advertencia, ha ocurrido un error',
   src: warning,
  },
  success: {
   title: 'Exito',
   alt: '',
   src: success,
  },
  redCar: {
   title: 'Logo de carrito rojo',
   alt: '',
   src: redCar,
  },
  empty: {
   title: 'Vacio',
   alt: '',
   src: empty,
  },
  load: {
   title: 'Refrescar',
   alt: '',
   src: load,
  },
  facebook: {
   title: 'Facebook',
   alt: '',
   src: facebook,
  },
  whatsapp: {
   title: 'Whatsapp',
   alt: '',
   src: whatsapp,
  },
  prostaeros: {
   title: '',
   alt: '',
   src: prostaeros,
  },
  avatar: {
   title: 'avatar del usuario',
   alt: '',
   src: avatar,
  },
 },
});
export { assets };
