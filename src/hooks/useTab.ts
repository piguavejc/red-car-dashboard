import { useState } from 'react';

const useTab = () => {
 const [tab, setTab] = useState<string>('Todos');

 const handlerTab = (newTab: string) => {
  setTab(newTab);
 };
 return { tab, handlerTab };
};
export { useTab };
