import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Overview = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Overview'),
);
export default AppPage(() => <Overview />);