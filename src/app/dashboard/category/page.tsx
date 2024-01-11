'use client';
import { styles } from '@/atomic/theme';
import { CategoryView } from '@/views';
import React from 'react';

export default function Category() {
 return (
  <main
   className="w-full h-screen  flex flex-col justify-stretch items-stretch"
   style={styles.backgrounds.secondary}
  >
   <CategoryView />
  </main>
 );
}
