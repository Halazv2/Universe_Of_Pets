import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Localization = asyncComponent(
  () => import('../../../../modules/muiComponents/datagrid/Localization'),
);
export default AppPage(() => <Localization />);