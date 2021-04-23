import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(name, Bids, InvitedProvider, PostedOn, Biddingendson) {
  return { name, Bids, InvitedProvider, PostedOn, Biddingendson };
}

const rows = [createData('30 days', 0, 0, '22-march-2021', '22-April-2021')];

const useStyles = makeStyles({
  table: {
    minWidth: 350
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Estimated Time</StyledTableCell>
            <StyledTableCell align="right">Bids</StyledTableCell>
            <StyledTableCell align="right">
              Invited&nbsp;provider
            </StyledTableCell>
            <StyledTableCell align="center">Posted&nbsp;on</StyledTableCell>
            <StyledTableCell align="center">
              Bidding&nbsp;ends&nbsp;on
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Bids}</StyledTableCell>
              <StyledTableCell align="center">
                {row.InvitedProvider}
              </StyledTableCell>
              <StyledTableCell align="center">{row.PostedOn}</StyledTableCell>
              <StyledTableCell align="center">
                {row.Biddingendson}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
