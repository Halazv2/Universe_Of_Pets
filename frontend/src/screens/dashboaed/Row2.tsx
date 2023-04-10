import DashboardBox from '@/components/DashboardBox';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useGetProductsQuery, useGetCategoriesQuery, useGetOrdersQuery } from '@/state/api';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
type Props = {};

const Row2 = (props: Props) => {
  const { palette } = useTheme();
  const { data: products } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: orders } = useGetOrdersQuery();

  // count number of products and categories
  const numberOfProducts = products?.length;
  const numberOfCategories = categories?.length;
  const numberOfOrders = orders?.length;

  return (
    <>
      <DashboardBox gridArea="a" sx={{ zIndex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        >
          <AssessmentTwoToneIcon sx={{ fontSize: '2rem', color: palette.grey[100] }} />
          <Typography variant="h4" fontSize="18px" sx={{ fontWeight: 'bold', mb: '0.5rem', textAlign: 'center', letterSpacing: '0.1rem', color: palette.grey[100] }}>
            Hello and welcome back to your dashboard ! Here you can manage your pets store
          </Typography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="b" sx={{ zIndex: 1, position: 'relative' }}>
        {/* number of products */}

        <Box
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        >
          <StoreMallDirectoryTwoToneIcon sx={{ fontSize: '2rem', color: palette.grey[100] }} />
          <Typography variant="h4" fontSize="18px" sx={{ fontWeight: 'bold', mb: '0.5rem', textAlign: 'center', letterSpacing: '0.1rem', color: palette.grey[100] }}>
            There are {numberOfProducts} products in your store
          </Typography>
          <Typography variant="h4" fontSize="18px" sx={{ fontWeight: 'bold', mb: '0.5rem', textAlign: 'center', letterSpacing: '0.1rem', color: palette.grey[100] }}>
            And {numberOfCategories} categories
          </Typography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="c" sx={{ zIndex: 1, position: 'relative' }}>
        <Box
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        >
          <TrendingUpTwoToneIcon sx={{ fontSize: '2rem', color: palette.grey[100] }} />
          <Typography variant="h4" fontSize="18px" sx={{ fontWeight: 'bold', mb: '0.5rem', textAlign: 'center', letterSpacing: '0.1rem', color: palette.grey[100] }}>
            There are {numberOfOrders} orders
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
