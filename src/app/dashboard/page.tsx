'use client';
import { CategoryView, LaboratoryView, ProductView } from '@/views';
import { CustomHeader } from '@/atomic/designs';
import { useHeader } from '@/hooks';

export default function Dashboard() {
 const { headers, target, handlerTarger } = useHeader();

 return (
  <main className="w-full h-screen bg-slate-200 flex flex-col justify-stretch items-stretch">
   <CustomHeader list={headers} target={target} hanlderTarget={handlerTarger} />
   {target === 0 && <CategoryView />}
   {target === 1 && <LaboratoryView />}
   {target === 2 && <ProductView />}
  </main>
 );
}
