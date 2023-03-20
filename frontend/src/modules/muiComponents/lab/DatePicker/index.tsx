import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicDatePicker from './BasicDatePicker';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicDatePickerSource from '!raw-loader!./BasicDatePicker';
import StaticDatePickerDemo from './StaticDatePickerDemo';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StaticDatePickerDemoSource from '!raw-loader!./StaticDatePickerDemo';
import ResponsiveDatePickers from './ResponsiveDatePickers';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ResponsiveDatePickersSource from '!raw-loader!./ResponsiveDatePickers';
import FormPropsDatePickers from './FormPropsDatePickers';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FormPropsDatePickersSource from '!raw-loader!./FormPropsDatePickers';
import LocalizedDatePicker from './LocalizedDatePicker';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import LocalizedDatePickerSource from '!raw-loader!./LocalizedDatePicker';
import JalaliCalendarSystem from './JalaliCalendarSystem';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import JalaliCalendarSystemSource from '!raw-loader!./JalaliCalendarSystem';
import ViewsDatePicker from './ViewsDatePicker';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ViewsDatePickerSource from '!raw-loader!./ViewsDatePicker';
import StaticDatePickerLandscape from './StaticDatePickerLandscape';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import StaticDatePickerLandscapeSource from '!raw-loader!./StaticDatePickerLandscape';
import SubComponentsPickers from './SubComponentsPickers';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SubComponentsPickersSource from '!raw-loader!./SubComponentsPickers';
import CustomInput from './CustomInput';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomInputSource from '!raw-loader!./CustomInput';
import CustomDay from './CustomDay';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomDaySource from '!raw-loader!./CustomDay';
import ServerRequestDatePicker from './ServerRequestDatePicker';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ServerRequestDatePickerSource from '!raw-loader!./ServerRequestDatePicker';
import HelperText from './HelperText';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import HelperTextSource from '!raw-loader!./HelperText';

const DatePicker = () => {
  return (
    <>
      <AppComponentHeader
        title='Date Picker'
        description='Date pickers let the user select a date.'
        refUrl='https://mui.com/components/date-picker/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic usage'
            component={BasicDatePicker}
            source={BasicDatePickerSource}
            noScrollbar
            description='The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Helper text'
            component={HelperText}
            source={HelperTextSource}
            noScrollbar
            description='You can show a helper text with the date format accepted.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Form props'
            component={FormPropsDatePickers}
            source={FormPropsDatePickersSource}
            noScrollbar
            description='The date picker component can be disabled or read-only.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Localization'
            component={LocalizedDatePicker}
            source={LocalizedDatePickerSource}
            noScrollbar
            description='Use LocalizationProvider to change the date-engine locale that is used to render the date picker. Here is an example of changing the locale for the date-fns adapter:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom input component'
            component={CustomInput}
            source={CustomInputSource}
            noScrollbar
            description='You can customize the rendering of the input with the renderInput prop. Make sure to spread ref and inputProps correctly to the custom input component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Dynamic data'
            component={ServerRequestDatePicker}
            source={ServerRequestDatePickerSource}
            noScrollbar
            description='Sometimes it may be necessary to display additional info right in the calendar.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Jalali Calendar System'
            component={JalaliCalendarSystem}
            source={JalaliCalendarSystemSource}
            noScrollbar
            description='Install date-fns-jalali and use @date-io/date-fns-jalali adapter to support Jalali calendar.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Static mode'
            component={ResponsiveDatePickers}
            source={ResponsiveDatePickersSource}
            noScrollbar
            description='The date picker component is designed and optimized for the device it runs on.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Static mode'
            component={StaticDatePickerDemo}
            source={StaticDatePickerDemoSource}
            noScrollbar
            description='Its possible to render any date picker without the modal/popover and text field.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Views playground'
            component={ViewsDatePicker}
            source={ViewsDatePickerSource}
            noScrollbar
            description='Its possible to combine year, month, and date selection views. Views will appear in the order theyre included in the views array.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized day rendering'
            component={CustomDay}
            source={CustomDaySource}
            noScrollbar
            description='The displayed days are customizable with the renderDay function prop. You can take advantage of the PickersDay component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Landscape orientation'
            component={StaticDatePickerLandscape}
            source={StaticDatePickerLandscapeSource}
            noScrollbar
            description='For ease of use, the date picker will automatically change the layout between portrait and landscape by subscription to the window.orientation change.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Sub-components'
            component={SubComponentsPickers}
            source={SubComponentsPickersSource}
            noScrollbar
            description='Some lower-level sub-components (CalendarPicker, MonthPicker, and YearPicker) are also exported. These are rendered without a wrapper or outer logic (masked input, date values parsing and validation, etc.).'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default DatePicker;
