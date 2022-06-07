import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Switch, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../../../features/TuristicPointsReportSlice";

/****
 * BODY DATA FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */

export default function index({ OpenModal,OpenDetails }) {
  //get QUERY_BYSTRING AND QUERY_BYNUM
  const query = useSelector((state) => state.query.query_string);
  const queryNum = useSelector((state) => state.query.queryByNumber);
  const categoryData = useSelector(selectAll);

  return (
    <>
      {categoryData
        .filter((row) => row.name.toLowerCase().includes(query))
        .slice(0, queryNum)
        .map((row) => {
          return (
            <TableRow hover key={row.id}>
              <TableCell sx={{ width: "20px" }}>{row.code}</TableCell>
              <TableCell sx={{ width: "300px" }}>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell
                sx={{ width: "70px", color: "#006875", cursor: "pointer" }}
                align="center"
              >
                <RemoveRedEyeOutlined onClick = { () => OpenDetails(row.id)}/>
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
          );
        })}
    </>
  );
}
