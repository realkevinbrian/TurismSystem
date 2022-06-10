/***
 * Reusable Component ShopsReport body data
 */

import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Switch, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAll as selectCategory } from "../../../features/CategorySlice";
import { selectAll, UpdateRow } from "../../../features/ShopsReportSlice";
import { StyledDisplayCat } from "./styled";

export default function index({ OpenModal, OpenDetails }) {
  /*****
   *
   * Here we read our retrieved data from redux store
   *
   * */
  const query = useSelector((state) => state.query.query_string);
  const queryNum = useSelector((state) => state.query.queryByNumber);
  const dispatch = useDispatch({ OpenModal, OpenDetails });
  const data = useSelector(selectAll);
  const category = useSelector(selectCategory);

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
            <TableCell>
              {category
                .filter((item) => item.id === row.cat_id)
                .map((item, index) => (
                  <StyledDisplayCat key={index}>
                    <div
                      style={{
                        borderColor: `${item.color}`,
                        color: `${item.color}`,
                      }}
                    >
                      <span style={{ backgroundColor: `${item.color}` }}></span>
                      <small key={index}>{item.name}</small>
                    </div>
                  </StyledDisplayCat>
                ))}
            </TableCell>
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
