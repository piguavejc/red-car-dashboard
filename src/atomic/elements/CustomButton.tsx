import { typesButton } from '@/constants';
import { CustomButtonProps } from '@/types';
import React from 'react';
import { Icon } from '.';

const CustomButton = (props: CustomButtonProps) => {
 if (props.type === typesButton.default)
  return (
   <button
    type="button"
    className={
     props.isDisable ? 'p-4 bg-gray-400 rounded-xl cursor-not-allowed' : props.stylyButton
    }
    disabled={props.isDisable}
    onClick={props.handlerPress}
    title={props.title}
   >
    <p className={props.stylyText}>{props.text}</p>
   </button>
  );
 if (
  props.type === typesButton.icon &&
  props.icon?.type &&
  props.icon.size &&
  props.icon.size &&
  props.icon.strokeWidth
 )
  return (
   <button
    type="button"
    title={props.title}
    className={props.stylyButton}
    onClick={props.handlerPress}
   >
    <Icon
     type={props.icon.type}
     color={props.icon.color}
     size={props.icon.size}
     strokeWidth={props.icon.strokeWidth}
    />
   </button>
  );
 if (
  props.type === typesButton.iconText &&
  props.icon?.type &&
  props.icon.size &&
  props.icon.size &&
  props.icon.strokeWidth
 )
  return (
   <button className={props.stylyButton} onClick={props.handlerPress} title={props.title}>
    <p className={props.stylyText}>{props.text}</p>
    <Icon
     type={props.icon.type}
     color={props.icon.color}
     size={props.icon.size}
     strokeWidth={props.icon.strokeWidth}
    />
   </button>
  );
 return null;
};

export { CustomButton };
