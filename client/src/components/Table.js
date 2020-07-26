import React, { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Tables = ({ rows, columns }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {rows.map(row => (
              <TableCell key={row}>{row}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {columns.map((column, ind) => (
            <Fragment key={ind}>
              <TableRow>
                <TableCell align="right">{column.skill}</TableCell>
                {rows.length === 3 && (
                  <TableCell align="right">{column.info}</TableCell>
                )}
                {column.link && (
                  <TableCell align="right">
                    <a href={column.link}>{column.linkName}</a>
                  </TableCell>
                )}
                {!column.link && (
                  <TableCell align="right">{column.rating}</TableCell>
                )}
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
