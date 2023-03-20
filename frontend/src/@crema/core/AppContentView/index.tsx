import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import AppContentViewWrapper from './AppContentViewWrapper';
import {SxProps} from '@mui/system';
import AppFooter from '../AppLayout/components/AppFooter';
import AppErrorBoundary from '../AppErrorBoundary';

interface AppContentViewProps {
  sxStyle?: SxProps;
  children: ReactNode;
}

const AppContentView: React.FC<AppContentViewProps> = ({sxStyle, children}) => {
  return (
    <AppContentViewWrapper>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          p: {xs: 5, md: 7.5, xl: 12.5},
          ...sxStyle,
        }}
        className='app-content'
      >
        <AppErrorBoundary>{children}</AppErrorBoundary>
      </Box>
      <AppFooter />
    </AppContentViewWrapper>
  );
};

export default AppContentView;
