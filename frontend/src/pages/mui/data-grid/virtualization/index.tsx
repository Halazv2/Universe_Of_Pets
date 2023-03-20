import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Virtualization = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Virtualization'),
);
export default AppPage(() => <Virtualization />);