import { CustomButton, CustomPhoto } from '@/atomic/elements';
import { signOut, useSession } from 'next-auth/react';
import { CustomHeaderProps } from '@/types';
import { types } from '@/constants';
import Link from 'next/link';
import React from 'react';

const CustomHeader = (props: CustomHeaderProps) => {
 const { data: session } = useSession();
 if (!session) return null;
 return (
  <nav className="p-4 flex-row-reverese-between-center flex-initial border-b-2 border-slate-300">
   <div className="flex-row-end-center">
    <h2 className="font-semibold text-slate-500 text-xl">{session.user?.name as string}</h2>
    <CustomPhoto
     className="rounded-full border-2 border-slate-300"
     title={''}
     src={session?.user?.image as string}
     width={75}
     height={75}
    />
   </div>
   <ul className="flex-row-end-center">
    <button
     className="bg-slate-600  px-8 py-4 rounded-xl"
     onClick={() => {
      signOut();
     }}
    >
     <Link href={'/'} className="text-slate-200 font-semibold text-xl">
      Salir
     </Link>
    </button>
    {props.list.map((item, i) => (
     <li key={i}>
      <CustomButton
       type={types.button.default}
       text={item}
       variant={props.target === i ? types.variant.button.primary : types.variant.button.secondary}
       handlerPress={() => props.hanlderTarget(i)}
       title={item}
      />
     </li>
    ))}
   </ul>
  </nav>
 );
};

export { CustomHeader };
