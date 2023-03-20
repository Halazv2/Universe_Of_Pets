import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const AutoComplete = asyncComponent(
  () => import('../../../../modules/muiComponents/inputs/AutoComplete'),
);
export default AppPage(() => <AutoComplete />);
