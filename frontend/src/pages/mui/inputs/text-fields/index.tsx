import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const TextFields = asyncComponent(
  () => import('../../../../modules/muiComponents/inputs/TextField'),
);
export default AppPage(() => <TextFields />);
