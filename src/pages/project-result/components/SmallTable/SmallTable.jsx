import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 199,
    color: 'red',
    backgroundColor: 'Black'
  },
  body: {
    color: 'White'
  }
});

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Estimated Time', '30 Days'),
  createData('Bids', 0),
  createData('Invited Provider', 0),
  createData('Posted on', '22-March-2021'),
  createData('Bidding ends on', '22-April-2021')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.body} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className={classes.body} align="right">
                {row.calories}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
