import { useAppSelector } from '@/store/configureStore';
import { useTrendingMoviesQuery } from '@/store/trending/api';
import { languageISOSelector } from '@/store/ui/selectors';

export const HomeTrendingMovies = () => {
  const langISOCode = useAppSelector(languageISOSelector);
  const {
    data: moviesData,
    // isLoading: moviesIsloading,
    // isFetching,
  } = useTrendingMoviesQuery({ page: 1, isoCode: langISOCode });
  // Slice just first 6
  const trendingMovies = moviesData?.results.slice(0, 6);

  console.log('trendingMovies', trendingMovies);

  return (
    <div>
      <span>home-trending-movies</span>
    </div>
  );
};
