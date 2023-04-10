import DashboardBox from '@/components/DashboardBox';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

type Props = {};

const Row2 = (props: Props) => {
  const { palette } = useTheme();
  return (
    <>
      <DashboardBox gridArea="a" sx={{ zIndex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        >
          <Typography variant="h4" fontSize="18px" sx={{ fontWeight: 'bold', mb: '0.5rem', textAlign: 'center', letterSpacing: '0.1rem', color: palette.grey[100] }}>
            Hello, Welcome to your dashboard ! Here you can manage your pets store
          </Typography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="b" sx={{ zIndex: 1, position: 'relative' }}>
        {/* number of products */}

        <Box
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        >
          <Typography variant="h4" fontSize="18px" sx={{ fontWeight: 'bold', mb: '0.5rem', textAlign: 'center', letterSpacing: '0.1rem', color: palette.grey[100] }}>
            There are 0 products in your store
          </Typography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="c" sx={{ zIndex: 1, position: 'relative' }}>
        <Box
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        >
          <Typography variant="h4" fontSize="18px" sx={{ fontWeight: 'bold', mb: '0.5rem', textAlign: 'center', letterSpacing: '0.1rem', color: palette.grey[100] }}>
            There are 0 categories in your store
          </Typography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row2;
