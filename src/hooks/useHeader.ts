import { useState } from 'react';

const header: string[] = ['Categoria', 'Laboratorio', 'Producto'];

const useHeader = () => {
 const [headers] = useState<string[]>(header);
 const [target, setTarget] = useState<number>(0);
 const handlerTarger = (target: number) => {
  setTarget(target);
 };
 return { headers, target, handlerTarger };
};
export { useHeader };
