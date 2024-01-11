'use client';
import { styles } from '@/atomic/theme';
import { LaboratoryView } from '@/views';
import React from 'react';

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
