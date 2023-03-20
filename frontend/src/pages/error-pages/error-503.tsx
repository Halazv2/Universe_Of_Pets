import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Error503 = asyncComponent(
  () => import('../../modules/errorPages/Error503'),
);
export default AppPage(() => <Error503 />);
