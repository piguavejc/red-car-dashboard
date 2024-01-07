'use client';
import { styles } from '@/atomic/theme';
import { LaboratoryView } from '@/views';

export default function Laboratory() {
 return (
  <main
   className="w-full h-screen flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <LaboratoryView />
  </main>
 );
}
