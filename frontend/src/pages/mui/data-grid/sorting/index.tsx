import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Sorting = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Sorting'),
);
export default AppPage(() => <Sorting />);