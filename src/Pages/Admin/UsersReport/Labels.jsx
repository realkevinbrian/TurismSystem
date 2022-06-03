/****
 * In this component we Declare Labels for the table
 * So I decided to separate these components to make our code more reusable
 */
import { TableCell } from "@mui/material";
import React from "react";

//At this point we declare Labels for the finance page

//At this point we declare Labels for the finance page
const Labels = [
  { id: "codigo", label: "Codigo", minWidth: 170 },
  { id: "nome", label: "Nome", minWidth: 100 },
  {
    id: "data",
    label: "data",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Bloquear",
    label: "Bloquear",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  }
];


export default function index() {
  return (
    <>
      {Labels.map((column) => {
        return (
          <TableCell sx={{fontWeight : "bold"}} key={column.id}>{column.label}</TableCell>
        );
      })}
    </>
  );
}