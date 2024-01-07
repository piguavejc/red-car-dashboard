'use client';
import { CustomHeaderUser } from '@/atomic/designs';
import { signIn, useSession } from 'next-auth/react';
import { CustomLoading } from '@/atomic/components';
import { CustomButton } from '@/atomic/elements';
import { useRouter } from 'next/navigation';
import { data, types } from '@/constants';
import { useHeader } from '@/hooks';
import { styles } from '@/atomic/theme';

const { header } = data.screens.dashboard;
export default function Dashboard() {
 const router = useRouter();
 const session = useSession();
 const { headers } = useHeader(header.items, true);

 if (session.status === 'loading') return <CustomLoading variant={types.loading.normal} />;
 if (session.status === 'unauthenticated') signIn();

 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <CustomHeaderUser user={session.data?.user.name as string} />
   <section>
    {headers.map((item, i) => (
     <CustomButton
      key={i}
      text={item}
      title={item}
      type={types.button.default}
      variant={types.variant.button.secondary}
      handlerPress={() => router.push(`${header.items[i].url}`)}
     />
    ))}
   </section>
  </main>
 );
}
