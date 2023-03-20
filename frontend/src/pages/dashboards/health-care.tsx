import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const HealthCare = asyncComponent(
  () => import('../../modules/dashboards/HealthCare'),
);

export default AppPage(() => {
  return <HealthCare />;
});
