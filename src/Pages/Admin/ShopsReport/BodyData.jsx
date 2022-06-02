/***
 * Reusable Component finance body data
 */

import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../../../features/ShopsReportSlice";
import { selectAll  as selectCategory}  from "../../../features/CategorySlice";


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
  const category = useSelector(selectCategory);
  return (
    <>
      {data
        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .slice(0, queryNum)
        .filter((row) => row.name.toLowerCase().includes(query))
        .map((row) => (
          <TableRow hover key={row.id}>
            <TableCell sx={{width: "40px"}}>{row.code}</TableCell>
            <TableCell sx={{width: "300px"}}>{row.name}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>
            {
              category.filter(item => item.id == row.cat_id).map((item, index) => <span key={index}>{item.category}</span>)
            }
            </TableCell>
            <TableCell sx={{width: "70px"}}><RemoveRedEyeOutlined/></TableCell>
            <TableCell sx={{width: "50px"}} align = "left">{row.status}</TableCell>
          </TableRow>
        ))}
    </>
  );
}
