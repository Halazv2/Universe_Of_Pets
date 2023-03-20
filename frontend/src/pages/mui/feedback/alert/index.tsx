import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Alert = asyncComponent(
  () => import('../../../../modules/muiComponents/feedback/Alert'),
);
export default AppPage(() => <Alert />);
