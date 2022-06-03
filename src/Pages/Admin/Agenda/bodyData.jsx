/****
 * Agenda Page
 */

import { DeleteOutlined, Edit } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteRow, selectAll, UpdateRow } from "../../../features/AgendaSlice";
import { StyledEditInput } from "../Category/styled";

export default function AgendaBodyData() {
  //query databystring and byNumber
  const query = useSelector((state) => state.query.query_string);
  const queryNum = useSelector((state) => state.query.queryByNumber);
  const agendaData = useSelector(selectAll);
  const [editRowId, setEditId] = useState(null);

  return (
    <>
      {agendaData
        .filter((row) => row.name.toLowerCase().includes(query))
        .slice(0, queryNum)
        .map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.id === editRowId ? (
                <EditableRow data={row} setEditId={setEditId} key={index} />
              ) : (
                <ReadOnlyRow data={row} setEditId={setEditId} key={index} />
              )}
            </React.Fragment>
          );
        })}
    </>
  );
}

/***
 * Read Only Row
 */
export const ReadOnlyRow = ({ data: row, setEditId }) => {
  const dispatch = useDispatch();

  return (
    <TableRow hover tabIndex={-1} key={row.id}>
      <TableCell colSpan={0} sx={{ maxWidth: "100px" }}>
        {row.name}
      </TableCell>
      <TableCell>{row.date}</TableCell>
      <TableCell>{row.start}</TableCell>
      <TableCell>$ {row.entrance}</TableCell>
      <TableCell sx={{ maxWidth: "450px" }}>{row.local}</TableCell>
      <TableCell align="right">
        <Edit
          style={{ color: "#079784", cursor: "pointer" }}
          onClick={() => setEditId(row.id)}
        />
      </TableCell>
      <TableCell align="right">
        <DeleteOutlined
          style={{ color: "#ec0202", cursor: "pointer" }}
          onClick={() => dispatch(DeleteRow({ id: row.id }))}
        />
      </TableCell>
    </TableRow>
  );
};

/**
 * Editable Row
 */

export const EditableRow = ({ data: row, setEditId }) => {

  const dispatch = useDispatch();
  //Grap our form edit values
  const [name, setName] = useState(row.name);
  const [date, setDate] = useState(row.date);
  const [start_time, setStartTime] = useState(row.start);
  const [entrance, setEntrance] = useState(row.entrance);
  const [local, setLocal] = useState(row.local);

  //Update method
  const handleUpdate = (id) => {
    dispatch(UpdateRow({ id: id, name, date, start_time, entrance, local }));
    setEditId(null);
  };

  return (
    <TableRow key={row.id}>
      <TableCell>
        <StyledEditInput
          type="text"
          value={name}
          placeholder="Atualize Nome"
          onChange={(self) => setName(self.target.value)}
        />
      </TableCell>
      <TableCell>
        <StyledEditInput
          type="date"
          value={date}
          placeholder="Atualize data"
          onChange={(self) => setDate(self.target.value)}
        />
      </TableCell>
      <TableCell>
        <StyledEditInput
          type="time"
          value={start_time}
          placeholder="Atualize a hora do inicio"
          onChange={(self) => setStartTime(self.target.value)}
        />
      </TableCell>
      <TableCell>
        <StyledEditInput
          type="number"
          value={entrance}
          placeholder="Atualize Valor da Entrada"
          onChange={(self) => setEntrance(self.target.value)}
        />
      </TableCell>
      <TableCell>
        <StyledEditInput
          type="text"
          value={local}
          placeholder="Atualize o Local"
          onChange={(self) => setLocal(self.target.value)}
        />
      </TableCell>
      <TableCell align="right">
        <span
          style={{ color: "#079784", cursor: "pointer" }}
          onClick={() => handleUpdate(row.id)}
        >
          Atualize
        </span>
      </TableCell>
      <TableCell align="right">
        <span
          style={{ color: "#ec0202", cursor: "pointer" }}
          onClick={() => setEditId(null)}
        >
          Cancelar
        </span>
      </TableCell>
    </TableRow>
  );
};
