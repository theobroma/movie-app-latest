import { useSearchQuery } from '@/store/search/api';

export const SearchContent = () => {
  const {
    data,
    // error,
    // isError,
    // isLoading,
    isFetching,
  } = useSearchQuery({ searchText: 'terminator' });

  console.log('data :>> ', data);

  return (
    <div>
      <span>search-content</span>
    </div>
  );
};
