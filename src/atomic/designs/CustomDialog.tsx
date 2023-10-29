import React from 'react';
import { CustomButton } from '@/atomic/elements';
import { typesButton } from '@/constants';
import { CustomDialogProps } from '@/types';

const CustomDialog = (props: CustomDialogProps) => {
 return (
  <div className="p-4 flexRowCenterStretch">
   {/* body dialog */}
   <div className="p-[5rem] space-y-4 bg-white rounded-xl flexColStart">
    {/* title and message dialog */}
    <h1 className="text-2xl font-semibold text-center text-slate-800">
     {props.setting.content?.message.title}
    </h1>
    <p className="text-xl text-slate-800 text-center">
     {props.setting.content?.message.text}
     <p className="text-xl font-semibold text-center text-slate-800">
      {props.setting.content?.name}
     </p>
    </p>
    {/* button primary dialog */}
    <CustomButton
     type={typesButton.default}
     isDisable={false}
     stylyButton={'buttonEnable'}
     stylyText={'inputButtonEnable'}
     text={'Si'}
     handlerPress={() => props.setting.handlerVerify(true)}
     title={'Si'}
    />
    {/* button secundary dialog */}
    <CustomButton
     type={typesButton.default}
     isDisable={false}
     stylyButton={'buttonDisable'}
     stylyText={'inputButtonDisable'}
     text={'No'}
     handlerPress={() => props.setting.handlerVerify(false)}
     title={'NO'}
    />
   </div>
  </div>
 );
};

export { CustomDialog };
