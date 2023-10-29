import React from 'react';
import { CustomHeaderProps } from '@/types';
import { typesButton } from '@/constants';
import { CustomButton, CustomPhoto } from '@/atomic/elements';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CustomHeader = (props: CustomHeaderProps) => {
 const router = useRouter();
 const { data: session } = useSession();
 if (!session) return null;
 return (
  <nav className="p-4 w-full flex flex-row-reverse justify-between items-center  border-b-2 border-slate-300 space-x-2">
   <div className="space-x-2 flex flex-row items-center">
    <h2 className="font-semibold text-slate-500 text-xl">{session.user?.name as string}</h2>
    <CustomPhoto
     className="rounded-full border-2 border-slate-300"
     title={''}
     src={session?.user?.image as string}
     width={75}
     height={75}
    />
   </div>
   <ul className="flex flex-row justify-end items-center space-x-[2rem]">
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
       type={typesButton.default}
       text={item}
       stylyText={`${
        props.target === i ? 'text-slate-100' : 'text-slate-600'
       } font-semibold text-xl`}
       stylyButton={`${
        props.target === i ? 'bg-rose-600' : 'bg-slate-300'
       } px-8 py-4  p-4 rounded-lg`}
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
