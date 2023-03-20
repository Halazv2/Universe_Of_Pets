import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicTrapFocus from './BasicTrapFocus';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicTrapFocusSource from '!raw-loader!./BasicTrapFocus';
import DisableEnforceFocus from './DisableEnforceFocus';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisableEnforceFocusSource from '!raw-loader!./DisableEnforceFocus';
import LazyTrapFocus from './LazyTrapFocus';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LazyTrapFocusSource from '!raw-loader!./LazyTrapFocus';
import PortalTrapFocus from './PortalTrapFocus';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import PortalTrapFocusSource from '!raw-loader!./PortalTrapFocus';

const TrapFocus = () => {
  return (
    <>
      <AppComponentHeader
        title='Trap Focus'
        description='Trap focus within a DOM node.'
        refUrl='https://mui.com/components/trap-focus/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Example'
            component={BasicTrapFocus}
            source={BasicTrapFocusSource}
            noScrollbar
            description='A basic timeline showing list of events.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Disable enforce focus'
            component={DisableEnforceFocus}
            source={DisableEnforceFocusSource}
            noScrollbar
            description='Clicks within the focus trap behave normally, but clicks outside the focus trap are blocked.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Lazy activation'
            component={LazyTrapFocus}
            source={LazyTrapFocusSource}
            noScrollbar
            description='By default, the component moves the focus to its descendants as soon as it opens: open={true}'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Portal'
            component={PortalTrapFocus}
            source={PortalTrapFocusSource}
            noScrollbar
            description='The following demo uses the Portal component to render a subset of the trap focus children into a new "subtree" outside of the current DOM hierarchy; so that they no longer form part of the focus loop.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TrapFocus;
