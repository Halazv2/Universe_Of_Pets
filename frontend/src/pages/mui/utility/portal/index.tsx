import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Portal = asyncComponent(
  () => import('../../../../modules/muiComponents/utils/Portal'),
);
export default AppPage(() => <Portal />);
