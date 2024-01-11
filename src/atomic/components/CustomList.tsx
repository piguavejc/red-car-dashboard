import { CustomButton, CustomPhoto } from '@/atomic/elements';
import { CustomEmpty, CustomLoading } from '.';
import { types, data } from '@/constants';
import { CustomListProps } from '@/types';
import { usePhoto } from '@/hooks';
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

 return (
  <ul className="flex-col-start-stretch  bg-helper px-4 py-8 space-y-4 rounded-lg  overflow-y-scroll">
   {props.isLoading ? (
    <CustomLoading variant={types.loading.listVertical} />
   ) : props.data.length <= 0 ? (
    <CustomEmpty />
   ) : (
    props.data.map((item, i) => (
     <li key={i} className="p-4 flex-row-between-center flex-initial bg-secondary rounded-lg ">
      {item.photo && (
       <button onClick={() => handlerImage(item.photo)} title={item.name}>
        <CustomPhoto
         title={item.name?.toString() as string}
         src={item.photo}
         width={50}
         height={50}
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
    ))
   )}
  </ul>
 );
};

export { CustomList };
