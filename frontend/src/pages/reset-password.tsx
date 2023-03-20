import React from 'react';
import AppPage from '../@crema/hoc/DefaultPage/index';
import asyncComponent from '../@crema/utility/asyncComponent';

const ResetPassword = asyncComponent(
  () => import('../modules/auth/ResetPasswordAwsCognito'),
);
export default AppPage(() => <ResetPassword />);
