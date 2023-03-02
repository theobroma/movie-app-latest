import { useEffect, useState } from 'react';
import * as React from 'react';
import { useDebounce } from 'usehooks-ts';

import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

export const SearchInput = () => {
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchTerm = useDebounce(searchVal, 300);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.currentTarget.value.trim());
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

      {/* {searchData.length > 0 && (
        <div className={classes.outputWrap}>
          <SearchOutput searchData={searchData} onClick={onPlaceClick} />
        </div>
      )} */}
    </Box>
  );
};
