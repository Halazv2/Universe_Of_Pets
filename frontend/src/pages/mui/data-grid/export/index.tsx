import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Export = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Export'),
);
export default AppPage(() => <Export />);