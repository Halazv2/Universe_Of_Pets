import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const MediaQuery = asyncComponent(
  () => import('../../../../modules/muiComponents/utils/MediaQuery'),
);
export default AppPage(() => <MediaQuery />);
