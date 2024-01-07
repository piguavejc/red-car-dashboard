'use client';
import { signIn, useSession } from 'next-auth/react';
import { CustomHeaderUser } from '@/atomic/designs';
import { CustomLoading } from '@/atomic/components';
import { data, images, types } from '@/constants';
import { styles } from '@/atomic/theme';
import { useHeader } from '@/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const { header } = data.screens.dashboard;
export default function Dashboard() {
 const session = useSession();
 const { headers } = useHeader(header.items, true);
 const route = useRouter();

 if (session.status === 'loading') return <CustomLoading variant={types.loading.normal} />;
 if (session.status === 'unauthenticated') signIn();

 const handlerGoPage =(page:string)=>{
    route.push(page)
 }
 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <CustomHeaderUser user={session.data?.user.name as string} />
   <section className='w-full flex-row-center-center'>
    {headers.map((item, i) => (
        <button key={i} title={item} className='flex-1 btn-secondary flex-col-center-center' onClick={()=>handlerGoPage(header.items[i].url)} >
            <Image src={images.avatar.src} alt={images.avatar.alt} title={images.avatar.title} width={150} height={150}  />
            <p className=' btn-text-secondary' > {item} </p> 
        </button>
    ))}
   </section>
  </main>
 );
}