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

function StyledTable({
  TableTitle,
  Component,
  Labels,
  TableData,
  SecondComponent,
}) {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: "4rem"}}>
      <Paper sx={{ borderRadius: "18px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={3}
                  style={{
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
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      placeItems: "center",
                    }}
                  >
                    <Grid item md={6} lg={6}  xl={6}  spacing = {3} container>
                      <Grid item>
                        <QueryByString placeholder={"Pesquise por nome"} />
                      </Grid>

                      <Grid item>
                        <QueryByString placeholder={"Pesquise"} />
                      </Grid>
                    </Grid>

                    <Grid item spacing = {3} container md={6} lg={6} xl={6} sx={{justifyContent : "space-between" , alignItems : "center"}}>
                      
                      <Grid item>
                        <QueryByNumber />
                      </Grid>
                      
                      <Grid item sx={{alignSelf : "end", justifySelf : "end"}}>
                        <Box>{Component}</Box>
                      </Grid>

                      {SecondComponent && (
                        <Grid item >
                          <Box>{SecondComponent}</Box>
                        </Grid>
                    )}
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
