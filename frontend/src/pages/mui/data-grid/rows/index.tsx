import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Rows = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Rows'),
);
export default AppPage(() => <Rows />);