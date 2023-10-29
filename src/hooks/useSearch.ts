import { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { Search } from '@/types';

const useSearch = () => {
 const [search, setSearch] = useState<Search>({ search: '' });
 const handlerTarget = (values: Search) => {
  setSearch(values);
 };

 const hanlderSearch = useCallback(debounce(handlerTarget, 500), []);
 return { search, hanlderSearch };
};
export { useSearch };
