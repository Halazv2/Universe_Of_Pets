import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Events = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Events'),
);
export default AppPage(() => <Events />);