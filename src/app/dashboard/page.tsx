'use client';
import { CategoryView, LaboratoryView, ProductView } from '@/views';
import { CustomHeader } from '@/atomic/designs';
import { useSession } from 'next-auth/react';
import { useHeader } from '@/hooks';
import Link from 'next/link';

const content = Object.freeze({
 loading: {
  ttitle: 'Por favor espere ...',
  text: ' Mientras se cargan los datos',
 },
 authentication: {},
});

export default function Dashboard() {
 const { headers, target, handlerTarger } = useHeader();
 const { data: session, status } = useSession();
 if (status === 'loading')
  return (
   <main className="w-full h-screen bg-slate-300 flex flex-col justify-center items-center space-y-4">
    <p className="text-slate-600 text-2xl font-semibold"> Por favor espere ... </p>
    <p className="text-slate-600 text-2xl font-semibold"> Mientras se cargan los datos </p>
   </main>
  );
 if (!session)
  return (
   <main className="w-full h-screen bg-slate-300 flex flex-col justify-center items-center space-y-4">
    <p className="text-slate-600 text-2xl font-semibold">No te has autenticado :C</p>
    <div className="flex flex-row justify-start items-center space-x-1">
     <p className="text-slate-600 text-2xl font-semibold">Regresa para que te:</p>
     <Link
      className="px-2  py-2 ml-5 text-2xl font-semibold rounded-xl text-rose-600 cursor-pointer"
      href={'/'}
     >
      Autentiques
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
