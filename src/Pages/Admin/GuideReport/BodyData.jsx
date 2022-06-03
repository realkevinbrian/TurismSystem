/***
 * Reusable Component Guides Report body data
 */

import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Switch, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAll, UpdateRow } from "../../../features/GuideReportSlice";

export default function index() {
  /**
   * Here we read our retrieved data from redux store
   * */
  const query = useSelector((state) => state.query.query_string);
  const queryNum = useSelector((state) => state.query.queryByNumber);

  /*****
   * Here we read our data being retrieved from our redux store
   * And decalre Dispatch
   */
  const data = useSelector(selectAll);
  const dispatch = useDispatch();
  
  /***
   * Declare switch functionality
   */
  function handleSwitch(rowStatus, rowId) {
    switch (rowStatus) {
      case "active":
        dispatch(UpdateRow({ id: rowId, status: "blocked" }));
        break;

      case "blocked":
        dispatch(UpdateRow({ id: rowId, status: "active" }));
        break;

      default:
        break;
    }
  }

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
            <TableCell sx={{ width: "70px" }}>
              <RemoveRedEyeOutlined />
            </TableCell>
            <TableCell sx={{ width: "50px" }} align="left">
              <Switch
                checked={row.status === "active" ? true : false}
                color="success"
                onChange={() => handleSwitch(row.status, row.id)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </TableCell>
          </TableRow>
        ))}
    </>
  );
}
