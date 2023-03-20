import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const ToggleButtons = asyncComponent(
  () => import('../../../../modules/muiComponents/inputs/ToggleButtons'),
);
export default AppPage(() => <ToggleButtons />);
