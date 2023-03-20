import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {grey} from '@mui/material/colors';
import {Fonts} from 'shared/constants/AppEnums';
import {initialUrl} from 'shared/constants/AppConst';
import AppAnimate from '@crema/core/AppAnimate';
import IntlMessages from '@crema/utility/IntlMessages';
// @ts-ignore
import Logo from '../../../assets/icon/500.svg';
import {useTheme} from '@mui/material';
import {useRouter} from 'next/router';

const Error500 = () => {
  const theme = useTheme();
  const router = useRouter();

  const onGoBackToHome = () => {
    router.push(initialUrl);
  };

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box
        sx={{
          py: {xl: 8},
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            mb: {xs: 4, xl: 8},
            width: '100%',
            '& svg': {
              width: '100%',
              maxWidth: 400,
            },
          }}
        >
          <Logo fill={theme.palette.primary.main} />
        </Box>
        <Box
          sx={{
            mb: {xs: 4, xl: 5},
          }}
        >
          <Box
            component='h3'
            sx={{
              mb: {xs: 3, xl: 4},
              fontSize: {xs: 20, md: 24},
              fontWeight: Fonts.MEDIUM,
            }}
          >
            <IntlMessages id='error.500Error' />.
          </Box>
          <Box
            sx={{
              mb: {xs: 4, xl: 5},
              color: grey[600],
              fontSize: 16,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            <Typography>
              <IntlMessages id='error.500Message1' />
            </Typography>
            <Typography>
              <IntlMessages id='error.500Message2' />
            </Typography>
          </Box>
          <Button
            variant='contained'
            color='primary'
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 16,
              textTransform: 'capitalize',
            }}
            onClick={onGoBackToHome}
          >
            <IntlMessages id='error.goBackToHome' />
          </Button>
        </Box>
      </Box>
    </AppAnimate>
  );
};

export default Error500;
