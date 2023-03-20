import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicTimeline from './BasicTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicTimelineSource from '!raw-loader!./BasicTimeline';
import LeftPositionedTimeline from './LeftPositionedTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LeftPositionedTimelineSource from '!raw-loader!./LeftPositionedTimeline';
import AlternateTimeline from './AlternateTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import AlternateTimelineSource from '!raw-loader!./AlternateTimeline';
import ColorsTimeline from './ColorsTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ColorsTimelineSource from '!raw-loader!./ColorsTimeline';
import OutlinedTimeline from './OutlinedTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import OutlinedTimelineSource from '!raw-loader!./OutlinedTimeline';
import OppositeContentTimeline from './OppositeContentTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import OppositeContentTimelineSource from '!raw-loader!./OppositeContentTimeline';
import CustomizedTimeline from './CustomizedTimeline';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedTimelineSource from '!raw-loader!./CustomizedTimeline';

const Timeline = () => {
  return (
    <>
      <AppComponentHeader
        title='Timeline'
        description='The timeline displays a list of events in chronological order.'
        refUrl='https://mui.com/components/timeline/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Timeline'
            component={BasicTimeline}
            source={BasicTimelineSource}
            noScrollbar
            description='A basic timeline showing list of events.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Colors'
            component={ColorsTimeline}
            source={ColorsTimelineSource}
            noScrollbar
            description='The TimelineDot can appear in different colors from theme palette.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Left-positioned timeline'
            component={LeftPositionedTimeline}
            source={LeftPositionedTimelineSource}
            noScrollbar
            description='The main content of the timeline can be positioned on the left side relative to the time axis.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Alternating timeline'
            component={AlternateTimeline}
            source={AlternateTimelineSource}
            noScrollbar
            description='The timeline can display the events on alternating sides.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Outlined'
            component={OutlinedTimeline}
            source={OutlinedTimelineSource}
            noScrollbar
            description=''
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Opposite Content'
            component={OppositeContentTimeline}
            source={OppositeContentTimelineSource}
            noScrollbar
            description='The timeline can display content on opposite sides.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomizedTimeline}
            source={CustomizedTimelineSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Timeline;
