import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const RadiosButton = asyncComponent(
  () => import('../../../../modules/muiComponents/inputs/Radio'),
);
export default AppPage(() => <RadiosButton />);
