import React from 'react';
import {Line, LineChart, ResponsiveContainer} from 'recharts';
import Box from '@mui/material/Box';

interface TrafficRaiseGraphProps {
  data: any[];
}

const TrafficRaiseGraph: React.FC<TrafficRaiseGraphProps> = ({data}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        '& .containerGraph': {
          width: '100%',
        },
      }}
    >
      <ResponsiveContainer height={200} className='containerGraph'>
        <LineChart data={data}>
          <Line
            type='monotone'
            dataKey='traffic'
            stroke='#4299E1'
            strokeWidth={4}
            dot={{r: 4}}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TrafficRaiseGraph;
