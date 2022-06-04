/***
 * Reusable Component finance body data
 */

import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../../../features/FinanceSlice";

export default function index() {
  /*****
   *
   * Here we read our retrieved data from redux store
   *
   * */
  const query = useSelector((state) => state.query.query_string);
  const queryNum = useSelector((state) => state.query.queryByNumber);

  /*****
   * Here we read our data being retrieved from our redux store
   */
  const data = useSelector(selectAll);

  return (
    <>
      {data
        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .slice(0, queryNum)
        .filter((row) => row.name.toLowerCase().includes(query))
        .map((row) => (
          <TableRow hover key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.transaction}</TableCell>
            <TableCell>
              {row.status === "Pendente" ? (
                <span style={{ color: "#ff7300" }}>{row.status}</span>
              ) : (
                <span style={{ color: "#01d371" }}>{row.status}</span>
              )}
            </TableCell>
            <TableCell>{row.total}</TableCell>
          </TableRow>
        ))}
    </>
  );
}
