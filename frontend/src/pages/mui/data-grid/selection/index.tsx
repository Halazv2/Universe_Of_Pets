import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Selection = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Selection'),
);
export default AppPage(() => <Selection />);