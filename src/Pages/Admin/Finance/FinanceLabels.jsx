/****
 * In this component we Declare Labels for the table
 * So I decided to separate these components to make our code more reusable
 */
import { TableCell } from "@mui/material";
import React from "react";

//At this point we declare Labels for the finance page
const Labels = [
  { id: "name", label: "Nome", minWidth: 170 },
  { id: "tipo", label: "Tipo", minWidth: 100 },
  {
    id: "data",
    label: "Data",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transaction",
    label: "Transacao",
    minWidth: 170,
    align: "right",
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
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export function FinanceLabels() {
  return (
    <>
      {Labels.map((column) => {
        return (
          <TableCell key={column.id}>{column.label}</TableCell>
        );
      })}
    </>
  );
}
