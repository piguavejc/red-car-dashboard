import { useState } from 'react';

const useTab = (name: string) => {
 const [tab, setTab] = useState<string>(name);

 const handlerTab = (newTab: string) => {
  setTab(newTab);
 };
 return { tab, handlerTab };
};
export { useTab };
