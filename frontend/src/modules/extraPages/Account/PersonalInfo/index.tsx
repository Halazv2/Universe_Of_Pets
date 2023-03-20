import React from 'react';
import {useAuthUser} from '@crema/utility/AuthHooks';
import {Formik} from 'formik';
import * as yup from 'yup';
import PersonalInfoForm from './PersonalInfoForm';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import {saveProfile} from '../../../../redux/actions/Profile';
import {useDispatch} from 'react-redux';
import AppInfoView from '../../../../@crema/core/AppInfoView';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Required'),
});
const PersonalInfo = () => {
  const {user} = useAuthUser();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: 550,
      }}
    >
      <Formik
        validateOnBlur={true}
        initialValues={{
          ...user,
          photoURL: user.photoURL
            ? user.photoURL
            : '/assets/images/placeholder.jpg',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting}) => {
          setSubmitting(true);
          console.log('data: ', data);
          dispatch(saveProfile());
          setSubmitting(false);
        }}
      >
        {({values, setFieldValue}) => {
          return (
            <PersonalInfoForm values={values} setFieldValue={setFieldValue} />
          );
        }}
      </Formik>
      <AppInfoView />
    </Box>
  );
};

export default PersonalInfo;

PersonalInfo.propTypes = {
  setFieldValue: PropTypes.func,
  values: PropTypes.string,
};
