/***
 * Reusable Component finance body data
 */

import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Switch, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAll, UpdateRow } from "../../../features/UsersReportSlice";

export default function index({ OpenModal, OpenDetails }) {
  /***
   * Here we read our retrieved data from redux store
   * */
  const query = useSelector((state) => state.query.query_string);
  const queryNum = useSelector((state) => state.query.queryByNumber);
  const data = useSelector(selectAll);

  console.log("Data :", data)

  return (
    <>
      {data
        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .slice(0, queryNum)
        .filter((row) => row.name.toLowerCase().includes(query))
        .map((row) => (
          <TableRow hover key={row.id}>
            <TableCell sx={{ width: "40px" }}>{row.code}</TableCell>
            <TableCell sx={{ width: "300px" }}>{row.name}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell
              sx={{ width: "70px", color: "#006875", cursor: "pointer" }}
            >
              <RemoveRedEyeOutlined onClick={() => OpenDetails(row.id)} />
            </TableCell>
            <TableCell sx={{ width: "50px" }} align="left">
              <Switch
                checked={row.status === "active" ? true : false}
                color="success"
                onChange={() => OpenModal(row.status, row.id, row.name)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </TableCell>
          </TableRow>
        ))}
    </>
  );
}
