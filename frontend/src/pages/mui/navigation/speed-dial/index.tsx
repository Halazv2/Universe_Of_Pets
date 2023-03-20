import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const SpeedDial = asyncComponent(
  () => import('../../../../modules/muiComponents/navigation/SpeedDial'),
);
export default AppPage(() => <SpeedDial />);

