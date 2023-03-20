import React from 'react';
import {AppCard} from '../../../@crema';
import ContactUsForm from './ContactUsForm';
import AppGridContainer from '../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import SendMessage from './SendMessage';
import contactUsData from '../../../@crema/services/db/extraPages/contactUs';
import Address from './Address';
import AppAnimate from '../../../@crema/core/AppAnimate';
import SimpleMap from './SimpleMap';
import Box from '@mui/material/Box';
import {Formik} from 'formik';
import * as yup from 'yup';

import {useIntl} from 'react-intl';

const ContactUs = () => {
  const {messages} = useIntl();

  const validationSchema = yup.object({
    fullName: yup
      .string()
      .required(String(messages['validation.nameRequired'])),
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    message: yup.string().required(String(messages['validation.message'])),
  });

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppCard>
        <Box sx={{mb: 5, maxHeight: '40%'}}>
          <SimpleMap />
        </Box>
        <SendMessage sendMessage={contactUsData.sendMessage} />
        <AppGridContainer>
          <Grid item xs={12} md={6}>
            <Formik
              validateOnChange={false}
              validateOnBlur={true}
              initialValues={{
                fullName: '',
                email: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true);
                console.log('data: ', data);
                //TODO Api Call here to save user info
                setSubmitting(false);
              }}
            >
              <ContactUsForm />
            </Formik>
          </Grid>
          <Grid item xs={12} md={6}>
            <Address />
          </Grid>
        </AppGridContainer>
      </AppCard>
    </AppAnimate>
  );
};

export default ContactUs;
