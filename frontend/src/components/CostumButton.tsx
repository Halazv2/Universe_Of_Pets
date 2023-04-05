import { Box, Typography, useTheme, Button } from '@mui/material';
import React from 'react';
import FlexBetween from './FlexBetween';

type Props = {
  text: string;
  icon?: React.ReactNode;
  action?: () => void;
  bgColor?: string;
};

const CostumButton = ({ icon, text, action, bgColor }: Props) => {
  const { palette } = useTheme();
  return (
    <Button
      onClick={action}
      sx={{
        backgroundColor: bgColor ? bgColor : palette.primary.main,
        borderRadius: '0px',
        width: '100%',
        height: '100%',
        '&:hover': {
          backgroundColor: palette.primary.dark,
          color: 'white'
        }
      }}
    >
      <FlexBetween>
        {icon ? icon : ''}
        <Box width="100%">
          <Typography
            variant="h4"
            mb="-0.1rem"
            sx={{
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            {text}
          </Typography>
        </Box>
      </FlexBetween>
    </Button>
  );
};

export default CostumButton;
