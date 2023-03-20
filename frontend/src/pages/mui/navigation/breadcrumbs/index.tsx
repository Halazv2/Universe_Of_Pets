import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const BreadCrumbs = asyncComponent(
  () => import('../../../../modules/muiComponents/navigation/Breadcrumbs'),
);
export default AppPage(() => <BreadCrumbs />);
