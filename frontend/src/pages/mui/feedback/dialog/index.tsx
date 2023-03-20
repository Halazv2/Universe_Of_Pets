import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Dialogs = asyncComponent(
  () => import('../../../../modules/muiComponents/feedback/Dialog'),
);
export default AppPage(() => <Dialogs />);
