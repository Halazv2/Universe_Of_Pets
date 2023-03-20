import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useDemoData} from '@mui/x-data-grid-generator';
import {DataGrid} from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export function CustomFooterStatusComponent(props: {
  status: 'connected' | 'disconnected';
}) {
  return (
    <Box sx={{padding: '10px', display: 'flex'}}>
      <FiberManualRecordIcon
        fontSize='small'
        sx={{
          mr: 2,
          color: props.status === 'connected' ? '#4caf50' : '#d9182e',
        }}
      />
      Status {props.status}
    </Box>
  );
}

export default function CustomFooter() {
  const [status, setStatus] = React.useState('connected');
  const {data} = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });
  return (
    <Box sx={{width: 1}}>
      <Box sx={{height: 350, width: 1, mb: 2}}>
        <DataGrid
          {...data}
          components={{
            Footer: CustomFooterStatusComponent,
          }}
          componentsProps={{
            footer: {status},
          }}
        />
      </Box>
      <Button
        color='primary'
        variant='contained'
        onClick={() =>
          setStatus((current) =>
            current === 'connected' ? 'disconnected' : 'connected',
          )
        }
      >
        {status === 'connected' ? 'Disconnect' : 'Connect'}
      </Button>
    </Box>
  );
}
