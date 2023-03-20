import dynamic from 'next/dynamic';
import React from 'react';
import {AppLoader} from '../index';

export default function asyncComponent(importComponent) {
  return dynamic(importComponent, {
    loading: () => <AppLoader />,
  });
}
