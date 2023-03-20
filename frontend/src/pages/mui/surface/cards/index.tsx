import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Cards = asyncComponent(
  () => import('../../../../modules/muiComponents/surfaces/Card'),
);
export default AppPage(() => <Cards />);
