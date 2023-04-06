import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePagination from '@mui/material/TablePagination';

interface RowData {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  price: number;
  history: {
    date: string;
    customerId: string;
    amount: number;
  }[];
}

interface CollapsibleTableProps {
  rows: RowData[];
}

function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        hover
        sx={{
          '& > *': {
            borderBottom: 'unset',
            border: 'none'
          }
        }}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="left">{row.user._id.slice(0, 5) + '...'}</TableCell>
        <TableCell align="left">{row.user.first_name}</TableCell>
        <TableCell align="left">{row.user.last_name}</TableCell>
        <TableCell align="left">{row.user.email}</TableCell>
        <TableCell align="left">{row.user.lastActivity}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Orders
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product ID</TableCell>
                    <TableCell align="right">status</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.orders &&
                    row.orders.map((historyRow: { _id: string; products: Array<string>; status: string; total: number }) => (
                      <TableRow
                        key={historyRow._id}
                        sx={{
                          backgroundColor: 'grey.500',
                          color: 'white',
                          border: 'none'
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {historyRow.products[0]}
                        </TableCell>
                        <TableCell align="right">{historyRow.status}</TableCell>
                        <TableCell align="right">{historyRow.total}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function CollapsibleTable(props: CollapsibleTableProps) {
  const { rows } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="collapsible table"
        sx={{
          backgroundColor: 'grey.500',
          color: 'grey.100'
        }}
      >
        <TableHead sx={{ backgroundColor: 'grey.900' }}>
          <TableRow>
            <TableCell />
            <TableCell sx={{ color: 'grey.100' }} align="left">
              ID
            </TableCell>
            <TableCell sx={{ color: 'grey.100' }} align="left">
              First Name
            </TableCell>
            <TableCell sx={{ color: 'grey.100' }} align="left">
              Last Name
            </TableCell>
            <TableCell sx={{ color: 'grey.100' }} align="left">
              Email
            </TableCell>
            <TableCell sx={{ color: 'grey.100' }} align="left">
              Last Active
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            '& .MuiTableCell-root': {
              borderBottom: 'unset'
            }
          }}
        >
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        sx={{
          backgroundColor: 'grey.900',
          color: 'grey.100'
        }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default CollapsibleTable;
