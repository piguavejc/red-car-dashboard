import { useRouter } from 'next/navigation';
import { data } from '@/constants';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const { secctions } = data.screens.homepage;

const useHeader = (items: { url: string; name: string }[], enlace: boolean) => {
 const navigation = useRouter();
 const [headers] = useState<string[]>(items.map((item) => item.name));
 const [target, setTarget] = useState<number>(0);
 const handlerTarger = (target: number) => {
  setTarget(target);
  if (enlace) {
   if (items[target].name === 'Entrar') signIn();
   else navigation.push(items[target].url);
  }
 };
 return { headers, target, handlerTarger };
};
export { useHeader };
