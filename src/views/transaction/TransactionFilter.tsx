import * as React from 'react';
import Button from '@mui/material/Button';
import FilterIcon from 'mdi-material-ui/FilterOutline';
import SortIcon from 'mdi-material-ui/SortAscending';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';


const TransactionFilter = () => {
  
  const isMobileSize = useMediaQuery('(max-width:800px)');
  return (
    <>
       <Stack direction="row" spacing={2}>
        <Button variant="outlined">
          {isMobileSize ? (<FilterIcon />) : 'Filter'}
        </Button>
        <Button variant="contained">
          {isMobileSize ? (<SortIcon />) : 'Sort'}
        </Button>
      </Stack>
    </>
  )
}

export default TransactionFilter
