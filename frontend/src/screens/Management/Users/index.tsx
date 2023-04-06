import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import CollapsibleTable from '@/components/CollapsibleTable';
import { useAllUsersQuery } from '@/state/api';
import TransitionsModal from '@/components/TransitionsModal';

function ManagementUsers() {
  const theme = useTheme();
  const [users, setUsers] = React.useState([]);
  const { data, isLoading }: any = useAllUsersQuery();

  useEffect(() => {
    if (data) {
      setUsers(data);
      console.log(data);
    }
  }, [data]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        marginTop: '1rem'
      }}
    >
      <Box>
        <Typography variant="h4" fontSize="16px">
          Management of Users
        </Typography>
      </Box>
      {users.length > 0 && (
        <Box
          width="100%"
          height="100%"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CollapsibleTable rows={users} />
        </Box>
      )}
    </Box>
  );
}

export default ManagementUsers;
