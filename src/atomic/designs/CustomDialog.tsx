import { CustomButton } from '@/atomic/elements';
import { CustomDialogProps } from '@/types';
import { types, data } from '@/constants';
import React from 'react';

const { dialog } = data.screens.dashboard;

const CustomDialog = (props: CustomDialogProps) => {
 return (
  <div className="p-4 flexRowCenterStretch">
   {/* body dialog */}
   <div className="p-[5rem] space-y-4 bg-white rounded-xl flex-col-start-stretch">
    {/* title and message dialog */}
    <h1 className="header-3">{props.setting.content?.message.title}</h1>
    <p className="default-text">
     {props.setting.content?.message.text}
     <p className="default-text-bold">{props.setting.content?.name}</p>
    </p>
    {/* button primary dialog */}
    <CustomButton
     isDisable={false}
     type={types.button.default}
     text={dialog.buttons.primary}
     title={dialog.buttons.primary}
     variant={types.variant.button.primary}
     handlerPress={() => props.setting.handlerVerify(true)}
    />
    {/* button secundary dialog */}
    <CustomButton
     isDisable={false}
     type={types.button.default}
     text={dialog.buttons.secondary}
     title={dialog.buttons.secondary}
     variant={types.variant.button.secondary}
     handlerPress={() => props.setting.handlerVerify(false)}
    />
   </div>
  </div>
 );
};

export { CustomDialog };
