import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Snackbar = asyncComponent(
  () => import('../../../../modules/muiComponents/feedback/Snackbar'),
);
export default AppPage(() => <Snackbar />);
