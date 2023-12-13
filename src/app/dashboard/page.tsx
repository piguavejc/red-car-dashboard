'use client';
import { CategoryView, LaboratoryView, ProductView } from '@/views';
import { CustomHeader } from '@/atomic/designs';
import { useSession } from 'next-auth/react';
import { useHeader } from '@/hooks';
import { data } from '@/constants';
import Link from 'next/link';

const { loading, user } = data.screens.dashboard.message;

export default function Dashboard() {
 const { headers, target, handlerTarger } = useHeader();
 const { data: session, status } = useSession();
 if (status === 'loading')
  return (
   <main className="flex-col-center-center w-full h-screen bg-slate-300">
    <p className="header-1"> {loading.title} </p>
    <p className="default-text"> {loading.text} </p>
   </main>
  );
 if (!session)
  return (
   <main className="flex-col-center-center w-full h-screen bg-slate-300">
    <p className="header-1"> {user.title} </p>
    <div className="flex flex-row justify-start items-center space-x-1">
     <p className="default-text">{user.text}</p>
     <Link
      className="px-2  py-2 ml-5 text-2xl font-semibold rounded-xl text-rose-600 cursor-pointer"
      href={'/'}
     >
      {user.button}
     </Link>
    </div>
   </main>
  );

 return (
  <main className="w-full h-screen bg-slate-200 flex flex-col justify-stretch items-stretch">
   <CustomHeader list={headers} target={target} hanlderTarget={handlerTarger} />
   {target === 0 && <CategoryView />}
   {target === 1 && <LaboratoryView />}
   {target === 2 && <ProductView />}
  </main>
 );
}
