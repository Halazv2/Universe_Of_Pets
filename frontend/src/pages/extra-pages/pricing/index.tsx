import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const Pricing = asyncComponent(
  () => import('../../../modules/extraPages/Pricing'),
);
export default AppPage(() => <Pricing />);
