import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import { useTheme } from '@emotion/react';
import DataTable from '@/components/Table';

function Management() {
  const data = [
    {
      code: 'E101',
      name: 'Ajay Bhatia',
      salary: 500000,
      phone: 9815215233
    },
    {
      code: 'E102',
      name: 'Ajit Singh',
      salary: 510000,
      phone: 9415245233
    },
    {
      code: 'E103',
      name: 'Rameshwer Singh',
      salary: 550000,
      phone: 9912215243
    },
    {
      code: 'E104',
      name: 'James Smith',
      salary: 200000,
      phone: 9915115131
    },
    {
      code: 'E105',
      name: 'Kruth',
      salary: 400000,
      phone: 9015115131
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        marginTop: '1rem'
      }}
    >
      <Box>
        <Typography variant="h4" fontSize="16px">
          Management of products
        </Typography>
      </Box>

      <Box
        width="100%"
        height="100%"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',

          marginTop: '1rem',
          '@media (max-width: 1200px)': {
            flexDirection: 'column'
          }
        }}
      >
        <Box width="100%">
          <Typography
            sx={{
              textAlign: 'left',
              width: '100%',
              color: 'grey.400',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            Products
          </Typography>
          <DataTable title="Products" data={data} />
        </Box>
        <Box width="100%">
          <Typography
            sx={{
              textAlign: 'left',
              width: '100%',
              color: 'grey.400',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            Categories
          </Typography>
          <DataTable title="Products" data={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default Management;
