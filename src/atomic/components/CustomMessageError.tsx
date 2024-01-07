import { CustomMessageErrorProps } from '@/types';
import { styles } from '@/atomic/theme';
import { images } from '@/constants';
import Image from 'next/image';
import React from 'react';

const CustomMessageError = (props: CustomMessageErrorProps) => {
 return (
  <section
   className="flex-col-center-center h-screen px-4 py-8  rounded-lg"
   style={styles.backgrounds.helper}
  >
   <div className="p-8 rounded-xl flex-col-center-center" style={styles.backgrounds.secondary}>
    <h6 className="header-3 flex-initial"> Mensaje de error en el servidor </h6>
    <p className="default-text flex-initial text-left"> {props.message} </p>
    <Image className="max-w-[30%] rounded-xl" src={images.warning.src} alt={images.warning.alt} />
    <p className="default-text flex-initial text-left">
     {' '}
     por favor recargue la pagina y vuelvalo a intentar{' '}
    </p>
   </div>
  </section>
 );
};

export { CustomMessageError };
