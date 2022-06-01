import React from "react";
import { TableCell } from "@mui/material";

/**
 * In this component we define labels for Agenda Table
 *
 */

export default function AgendaLabels() {
  const columns = [
    { id: "name", label: "Nome", align: "left" },
    { id: "date", label: "Data", align: "left" },
    { id: "start", label: "Inicio", align: "left" },
    { id: "entrance", label: "Entrada", align: "left" },
    { id: "local", label: "Local", align: "left" },
    { id: "edit", label: "Editar", align: "right" },
    { id: "delete", label: "Excluir", align: "right" },
  ];

  return (
    <>
      {
        columns.map((column) => {
          return (
            <TableCell key={column.id} align={column.align}>
              {column.label}
            </TableCell>
          );
        })
      }
    </>
  );
}
