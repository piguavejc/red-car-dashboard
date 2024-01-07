'use client';
import { styles } from '@/atomic/theme';
import { ProductView } from '@/views';

export default function Product() {
 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <ProductView />
  </main>
 );
}
