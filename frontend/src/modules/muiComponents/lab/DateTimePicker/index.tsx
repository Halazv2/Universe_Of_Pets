import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicDateTimePicker from './BasicDateTimePicker';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicDateTimePickerSource from '!raw-loader!./BasicDateTimePicker';
import ResponsiveDateTimePickers from './ResponsiveDateTimePickers';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ResponsiveDateTimePickersSource from '!raw-loader!./ResponsiveDateTimePickers';
import FormPropsDateTimePickers from './FormPropsDateTimePickers';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FormPropsDateTimePickersSource from '!raw-loader!./FormPropsDateTimePickers';
import DateTimeValidation from './DateTimeValidation';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DateTimeValidationSource from '!raw-loader!./DateTimeValidation';
import StaticDateTimePickerDemo from './StaticDateTimePickerDemo';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StaticDateTimePickerDemoSource from '!raw-loader!./StaticDateTimePickerDemo';
import CustomDateTimePicker from './CustomDateTimePicker';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomDateTimePickerSource from '!raw-loader!./CustomDateTimePicker';

const DateTimePicker = () => {
  return (
    <>
      <AppComponentHeader
        title='Date Time Picker'
        description='Combined date & time picker.'
        refUrl='https://mui.com/components/date-time-picker/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic usage'
            component={BasicDateTimePicker}
            source={BasicDateTimePickerSource}
            noScrollbar
            description='Allows choosing date then time. There are 4 steps available (year, date, hour and minute), so tabs are required to visually distinguish date/time steps.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Responsiveness'
            component={ResponsiveDateTimePickers}
            source={ResponsiveDateTimePickersSource}
            noScrollbar
            description='The DateTimePicker component is designed and optimized for the device it runs on.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Form props'
            component={FormPropsDateTimePickers}
            source={FormPropsDateTimePickersSource}
            noScrollbar
            description='The date time picker component can be disabled or read-only.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Date and time validation'
            component={DateTimeValidation}
            source={DateTimeValidationSource}
            noScrollbar
            description='It is possible to restrict date and time selection in two ways:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Static mode'
            component={StaticDateTimePickerDemo}
            source={StaticDateTimePickerDemoSource}
            noScrollbar
            description='Its possible to render any date & time picker inline. This will enable building custom popover/modal containers.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customization'
            component={CustomDateTimePicker}
            source={CustomDateTimePickerSource}
            noScrollbar
            description='Here are some examples of heavily customized date & time pickers:'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default DateTimePicker;
