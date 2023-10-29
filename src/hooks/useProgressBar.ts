import { useState } from 'react';

const useProgressBar = (lenght: number) => {
 const [items] = useState<number[]>(new Array(lenght).fill(1));
 const [position, setPosition] = useState<number>(0);
 const handlerPosition = (x: number) => {
  setPosition(x);
 };
 return { items, position, handlerPosition };
};
export { useProgressBar };
