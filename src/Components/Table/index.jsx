/**
 * In this component we are creating Reusable component
 */

import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { QueryByString, QueryByNumber } from "../Search";

function StyledTable({ TableTitle, Component, Labels, TableData }) {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "4rem" }}>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottomColor: "transparent",
                    padding: "0 20px",
                    paddingTop: "20px",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  {TableTitle}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="justify" colSpan={12}>
                  <Grid
                    container
                    sx={{
                      justifyContent: "space-between",
                      placeItems: "center",
                    }}
                  >
                    <Grid item xl={6}>
                      <QueryByString placeholder={"Pesquise por nome"} />
                    </Grid>

                    <Grid item xl={6}>
                      <QueryByString placeholder={"Pesquise"} />
                    </Grid>

                    <Grid item xl={6}>
                      <QueryByNumber />
                    </Grid>
                    <Grid item xl={6}>
                      <Box>{Component}</Box>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
              <TableRow>{Labels}</TableRow>
            </TableHead>
            <TableBody>{TableData}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default StyledTable;
