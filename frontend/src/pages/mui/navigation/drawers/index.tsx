import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Drawers = asyncComponent(
  () => import('../../../../modules/muiComponents/navigation/Drawer'),
);
export default AppPage(() => <Drawers />);
