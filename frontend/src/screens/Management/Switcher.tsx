import { useState } from 'react';
import { Link } from 'react-router-dom';
import PixIcon from '@mui/icons-material/Pix';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';

type Props = {
  switcher: string;
  setSwitcher: (value: string) => void;
};

const Switcher = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('dashboard');
  return (
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
      <FlexBetween width="80%">
        <Typography
          variant="h4"
          fontSize="16px"
          sx={{
            borderBottom: '2px solid',
            borderColor: props.switcher === 'products' ? palette.primary.main : 'transparent',
            color: props.switcher === 'products' ? palette.primary.main : palette.grey[500],
            transition: 'all 0.3s ease',
            '&:hover': {
              color: palette.primary.main
            }
          }}
          onClick={() => props.setSwitcher('products')}
        >
          Management of products
        </Typography>

        <Typography
          variant="h4"
          fontSize="16px"
          sx={{
            borderBottom: '2px solid',
            borderColor: props.switcher === 'users' ? palette.primary.main : 'transparent',
            color: props.switcher === 'users' ? palette.primary.main : palette.grey[500],
            transition: 'all 0.3s ease',
            '&:hover': {
              color: palette.primary.main
            }
          }}
          onClick={() => props.setSwitcher('users')}
        >
          Management of users
        </Typography>
      </FlexBetween>
    </Box>
  );
};

export default Switcher;
