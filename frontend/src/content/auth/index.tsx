import { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import {
  Grid,
  Divider,
  Container,
  Card,
  Box,
  useTheme,
  Avatar,
  styled,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import {useIntl} from 'react-intl';


import { Link } from 'react-router-dom';

const ContainerWrapper = styled(Box)(
  ({ theme }) => `
        padding: 0 ${theme.spacing(2)};
        position: relative;
        bottom: -1px;
  
        .MuiTabs-root {
          height: 44px;
          min-height: 44px;
        }
  
        .MuiTabs-scrollableX {
          overflow-x: auto !important;
        }
  
        .MuiTabs-indicator {
            min-height: 4px;
            height: 4px;
            box-shadow: none;
            bottom: -4px;
            background: none;
            border: 0;
  
            &:after {
              position: absolute;
              left: 50%;
              width: 28px;
              content: ' ';
              margin-left: -14px;
              background: ${theme.colors.primary.main};
              border-radius: inherit;
              height: 100%;
            }
        }
  
        .MuiTab-root {
            &.MuiButtonBase-root {
                height: 44px;
                min-height: 44px;
                background: ${theme.colors.alpha.white[50]};
                border: 1px solid ${theme.colors.alpha.black[10]};
                border-bottom: 0;
                position: relative;
                margin-right: ${theme.spacing(1)};
                font-size: ${theme.typography.pxToRem(14)};
                color: ${theme.colors.alpha.black[80]};
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
  
                .MuiTouchRipple-root {
                  opacity: .1;
                }
  
                &:after {
                  position: absolute;
                  left: 0;
                  right: 0;
                  width: 100%;
                  bottom: 0;
                  height: 1px;
                  content: '';
                  background: ${theme.colors.alpha.black[10]};
                }
  
                &:hover {
                  color: ${theme.colors.alpha.black[100]};
                }
            }
  
            &.Mui-selected {
                color: ${theme.colors.alpha.black[100]};
                background: ${theme.colors.alpha.white[100]};
                border-bottom-color: ${theme.colors.alpha.white[100]};
  
                &:after {
                  height: 0;
                }
            }
        }
    `
);

function Signin() {
  const theme = useTheme();
  const { messages } = useIntl();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    password: yup
      .string()
      .required(String(messages['validation.passwordRequired']))
  });

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: 'background.default', minHeight: '100%' }}
    >
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ContainerWrapper>
          <Typography component="h1" variant="h3">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/auth/reset-password">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/auth/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </ContainerWrapper>
      </Box>
    </Container>
  );
}

export default Signin;
