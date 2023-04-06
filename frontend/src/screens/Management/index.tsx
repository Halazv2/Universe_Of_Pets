import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Switcher from './Switcher';
import Products from './Product/Products';
import ManagementUsers from './Users';

function Management() {
  const [switcher, setSwitcher] = useState('products');

  return (
    <Box>
      <Switcher switcher={switcher} setSwitcher={setSwitcher} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '1rem'
        }}
      >
        {switcher === 'products' ? <Products /> : <ManagementUsers />}
      </Box>
    </Box>
  );
}

export default Management;
