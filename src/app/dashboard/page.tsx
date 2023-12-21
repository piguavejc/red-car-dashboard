'use client';
import { CategoryView, LaboratoryView, ProductView } from '@/views';
import { CustomHeader } from '@/atomic/designs';
import { data } from '@/constants';
import { useHeader } from '@/hooks';

const { header } = data.screens.dashboard;
export default function Dashboard() {
 const { headers, target, handlerTarger } = useHeader(header.items);

 return (
  <main className="w-full h-screen bg-slate-200 flex flex-col justify-stretch items-stretch">
   <CustomHeader list={headers} target={target} hanlderTarget={handlerTarger} />
   {target === 0 && <CategoryView />}
   {target === 1 && <LaboratoryView />}
   {target === 2 && <ProductView />}
  </main>
 );
}
