import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Metrics = asyncComponent(
  () => import('../../modules/dashboards/Metrics'),
);
export default AppPage(() => <Metrics />);
