import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Skeleton = asyncComponent(
  () => import('../../../../modules/muiComponents/feedback/Skeleton'),
);
export default AppPage(() => <Skeleton />);
