import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Layout = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Layout'),
);
export default AppPage(() => <Layout />);