import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Transitions = asyncComponent(
  () => import('../../../../modules/muiComponents/utils/Transitions'),
);
export default AppPage(() => <Transitions />);
