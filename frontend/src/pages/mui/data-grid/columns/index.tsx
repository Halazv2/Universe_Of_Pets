import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Columns = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Columns'),
);
export default AppPage(() => <Columns />);