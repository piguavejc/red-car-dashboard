import { CustomButton, CustomPhoto } from '@/atomic/elements';
import { images, types, data } from '@/constants';
import { CustomListProps } from '@/types';
import { usePhoto } from '@/hooks';
import Image from 'next/image';
import React from 'react';

const { list } = data.screens.dashboard;

const CustomList = (props: CustomListProps) => {
 const { isOpen, photo, handlerHidde, handlerImage } = usePhoto();
 if (isOpen)
  return (
   <figure className="flex-col-start-center bg-helper px-4 py-8 rounded-lg">
    <CustomButton
     title={list.buttons.close}
     type={types.button.icon}
     className="self-center"
     icon={types.icon.close}
     handlerPress={handlerHidde}
    />
    <CustomPhoto title={''} src={photo!} width={200} height={200} />
   </figure>
  );
 /* is loading */
 if (props.isLoading)
  return (
   <div className="flex-col-center-center bg-helper px-4 py-8  rounded-lg">
    <p className="font-semibold text-xl text-slate-600">{list.load}</p>
    <Image src={images.redCar.src} width={200} height={200} alt="" />
   </div>
  );
 /* it is empty */
 if (props.data.length <= 0)
  return (
   <div className="flex-col-center-center bg-helper px-4 py-8  rounded-lg">
    <Image
     src={images.redCar.src.src}
     className="flex-1"
     height={300}
     width={300}
     title={''}
     alt=""
    />
    <p className="default-text-bold"> {list.empty} </p>
   </div>
  );

 return (
  <ul className="flex-col-start-stretch  bg-helper px-4 py-8 space-y-4 rounded-lg  overflow-y-scroll">
   {props.data.map((item, i) => (
    <li key={i} className="p-4 flex-row-between-center bg-secondary rounded-lg ">
     {item.photo && (
      <button onClick={() => handlerImage(item.photo)} title={item.name}>
       <CustomPhoto
        title={item.name?.toString() as string}
        src={item.photo}
        width={25}
        height={25}
       />
      </button>
     )}
     <p className="default-text-bold">{item.name}</p>
     <div className="flex-row-end-center">
      {props.handlerEnable && (
       <CustomButton
        type={types.button.icon}
        icon={types.icon.enable}
        title={list.buttons.enable}
        variant={types.variant.button.secondary}
        handlerPress={() => {
         props.handlerEnable && props.handlerEnable(item.id!, item.name!);
        }}
       />
      )}
      {props.handlerEdit && (
       <CustomButton
        icon={types.icon.edit}
        type={types.button.icon}
        title={list.buttons.edit}
        variant={types.variant.button.secondary}
        handlerPress={() => {
         props.handlerEdit && props.handlerEdit(item.id!, item.name!);
        }}
       />
      )}
      {props.handlerDelete && (
       <CustomButton
        type={types.button.icon}
        icon={types.icon.elimited}
        title={list.buttons.delete}
        variant={types.variant.button.secondary}
        handlerPress={() => {
         props.handlerDelete && props.handlerDelete(item.id!, item.name!);
        }}
       />
      )}
      {props.handlerDetail && (
       <CustomButton
        type={types.button.icon}
        title={list.buttons.detail}
        icon={types.icon.detail}
        variant={types.variant.button.secondary}
        handlerPress={() => {
         props.handlerDetail && props.handlerDetail(Number(item.id));
        }}
       />
      )}
     </div>
    </li>
   ))}
  </ul>
 );
};

export { CustomList };
