import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Account = asyncComponent(() => import('modules/extraPages/Account'));
export default AppPage(() => <Account />);
