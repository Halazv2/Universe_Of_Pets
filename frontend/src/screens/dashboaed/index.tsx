import DashboardBox from '@/components/DashboardBox';
import { useMediaQuery } from '@mui/material';
import { Box, grid, useTheme } from '@mui/system';
import React from 'react';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

type Props = {};

const gridTemplate = `
      "a b c"
      "a b c"
      "a b c"
      "d e f"
      "d e f"
      "d e f"
      "d e f"
      "g h i"
      "g h j"
      "g h j"
      `;

const gridTemplateSmallScreens = `
      "a"
      "a"
      "b"
      "b"
      "c"
      "c"
      "d"
      "d"
      "d"
      "d"
      "e"
      "e"
      "e"
      "e"
      "f"
      "f"
      "f"
      "f"
      "g"
      "g"
      "g"
      "h"
      "h"
      "h"
      "h"
      "i"
      "i"
      "j"
      "j"
    `;
const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)');
  const { palette } = useTheme();
  return (
    <>
      <Box
        width="100%"
        height="100%"
        display="grid"
        gap="1.5rem"
        sx={
          isAboveMediumScreens
            ? {
                gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
                gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
                gridTemplateAreas: gridTemplate
              }
            : {
                gridAutoColumns: '1fr',
                gridAutoRows: '80px',
                gridTemplateAreas: gridTemplateSmallScreens
              }
        }
      >
        <Row2 />
        <Row1 />
        {/* <Row3 /> */}
      </Box>
    </>
  );
};

export default Dashboard;
