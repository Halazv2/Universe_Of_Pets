import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Error401 = asyncComponent(
  () => import('../../modules/errorPages/Error401'),
);
export default AppPage(() => <Error401 />);
