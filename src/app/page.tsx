'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants/images.const';

export default function Home() {
 const { data: session } = useSession();

 return (
  <main className="w-full h-screen bg-slate-200 flex flex-col justify-center items-center space-y-4">
   <Image src={images.logo.src} width={200} height={200} alt="" />
   {!session ? (
    <button
     className="px-8 py-4 bg-slate-100 rounded-xl font-semibold text-gray-600 text-xl"
     onClick={() => signIn('google')}
    >
     Entra con google
    </button>
   ) : (
    <Link
     className="px-8 py-4 bg-rose-600 rounded-xl font-semibold text-slate-100 text-xl"
     href={'/dashboard'}
    >
     Ir al panel de control
    </Link>
   )}
  </main>
 );
}
