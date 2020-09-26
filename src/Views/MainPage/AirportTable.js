import React from "react";

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import data from "../../locationsExemple.json";

import { ParseDMS } from "../../Utility/AirportParse.js";

const useStyles = makeStyles((theme) => ({}));

function AirportTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">DMS</TableCell>
            <TableCell align="right">Created At</TableCell>
            <TableCell align="right">Runways</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.aerodromes.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{ParseDMS(row.description)}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.runways.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AirportTable;
