import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CardHeader, Typography } from '@mui/material';

type porps = {
  title: string;
  data: any;
};

function DataTable({ title, data }: porps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const headers = Object.keys(data[0]);

  return (
    <Paper
      sx={{
        width: '100%',
        overflow: 'hidden',
        borderRadius: '0px'
      }}
    >
      <Table>
        <TableHead
          sx={{
            backgroundColor: 'grey.900',
            color: 'primary.contrastText'
          }}
        >
          <TableRow>
            {headers.map((header, index) => (
              <TableCell align="center">
                <Typography variant="h6" fontSize="16px" key={index}>
                  {header}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            backgroundColor: 'grey.500',
            color: 'white',
            border: 'none'
          }}
        >
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => (
            <TableRow
              hover
              sx={{
                backgroundColor: 'grey.500',
                color: 'white',
                border: 'none'
              }}
              role="checkbox"
              tabIndex={-1}
              key={row.code}
            >
              {headers.map((header, index) => (
                <TableCell align="center" key={index}>
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        sx={{
          backgroundColor: 'grey.900',
          color: 'white'
        }}
        rowsPerPageOptions={[2, 3, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default DataTable;