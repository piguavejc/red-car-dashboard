import { useState } from 'react';

const useHeader = (items: string[]) => {
 const [headers] = useState<string[]>(items);
 const [target, setTarget] = useState<number>(0);
 const handlerTarger = (target: number) => {
  setTarget(target);
 };
 return { headers, target, handlerTarger };
};
export { useHeader };
