// https://stackoverflow.com/questions/72502994/rtk-query-run-query-only-after-user-stops-typing-in-search-field
import React, { useState } from 'react';
import { useDebounce } from 'usehooks-ts';

import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { SearchContent } from '@/pages/search/search-content/search-content';
import { useSearchQuery } from '@/store/search/api';

export const SearchInput = () => {
  const [searchVal, setSearchVal] = useState('terminator');
  const debouncedSearchTerm = useDebounce(searchVal, 500);

  const {
    data,
    // error,
    // isError,
    // isLoading,
    isFetching,
  } = useSearchQuery(
    { searchText: debouncedSearchTerm },
    { skip: debouncedSearchTerm === '' },
  );

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.currentTarget.value);
  };

  return (
    <Box py={3}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search-input">Search</InputLabel>
        <OutlinedInput
          // need for correct styles. Same text as in InputLabel
          label="Search"
          id="search-input"
          value={searchVal}
          onChange={handleChange()}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      {/* RESULTS */}
      <Box pt={5}>
        <SearchContent data={data} isFetching={isFetching} />
      </Box>
    </Box>
  );
};
