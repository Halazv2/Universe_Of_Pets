import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const ClickAwayListener = asyncComponent(
  () => import('../../../../modules/muiComponents/utils/ClickawayListener'),
);
export default AppPage(() => <ClickAwayListener />);
