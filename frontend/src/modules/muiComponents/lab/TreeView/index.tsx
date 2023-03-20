import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import FileSystemNavigator from './FileSystemNavigator';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import FileSystemNavigatorSource from '!raw-loader!./FileSystemNavigator';
import MultiSelectTreeView from './MultiSelectTreeView';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MultiSelectTreeViewSource from '!raw-loader!./MultiSelectTreeView';
import ControlledTreeView from './ControlledTreeView';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ControlledTreeViewSource from '!raw-loader!./ControlledTreeView';
import RichObjectTreeView from './RichObjectTreeView';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import RichObjectTreeViewSource from '!raw-loader!./RichObjectTreeView';
import CustomIcons from './CustomIcons';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomIconsSource from '!raw-loader!./CustomIcons';
import GmailClone from './GmailClone';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import GmailCloneSource from '!raw-loader!./GmailClone';
import DisabledTree from './DisabledTree';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import DisabledTreeSource from '!raw-loader!./DisabledTree';
import ContentComponent from './ContentComponent';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ContentComponentSource from '!raw-loader!./ContentComponent';

const TreeView = () => {
  return (
    <>
      <AppComponentHeader
        title='Tree View'
        description='A tree view widget presents a hierarchical list.'
        refUrl='https://mui.com/components/tree-view/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic tree view'
            component={FileSystemNavigator}
            source={FileSystemNavigatorSource}
            noScrollbar
            description=''
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Multi-selection'
            component={MultiSelectTreeView}
            source={MultiSelectTreeViewSource}
            noScrollbar
            description='Tree views also support multi-selection.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controlled Tree View'
            component={ControlledTreeView}
            source={ControlledTreeViewSource}
            noScrollbar
            description='The tree view also offers a controlled API.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Rich object'
            component={RichObjectTreeView}
            source={RichObjectTreeViewSource}
            noScrollbar
            description='While the TreeView/TreeItem component API maximizes flexibility, an extra step is needed to handle a rich object.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom Icons'
            component={CustomIcons}
            source={CustomIconsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Gmail clone'
            component={GmailClone}
            source={GmailCloneSource}
            noScrollbar
            description='While the TreeView/TreeItem component API maximizes flexibility, an extra step is needed to handle a rich object.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Disabled tree items'
            component={DisabledTree}
            source={DisabledTreeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ContentComponent prop'
            component={ContentComponent}
            source={ContentComponentSource}
            noScrollbar
            description='You can use the ContentComponent prop and the useTreeItem hook to further customize the behavior of the TreeItem.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TreeView;
