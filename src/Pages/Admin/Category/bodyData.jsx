import { TableCell, TableRow } from "@mui/material";
import { Edit, DeleteOutline } from "@mui/icons-material";
import React, { useState } from "react";
import * as S from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAll,
  DeleteRow,
  UpdateRow,
} from "../../../features/CategorySlice";

/****
 * BODY DATA FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */

export default function index() {
  //get QUERY_BYSTRING AND QUERY_BYNUM
  const query = useSelector((state) => state.query.query_string);
  const queryNum = useSelector((state) => state.query.queryByNumber);
  const categoryData = useSelector(selectAll);
  const [editRowId, setEditId] = useState(null);

  return (
    <>
      {categoryData
        .filter((row) => row.name.toLowerCase().includes(query))
        .slice(0, queryNum)
        .map((row) => {
          return (
            <React.Fragment key={row.id}>
              {row.id === editRowId ? (
                <EditableRow data={row} setEditId={setEditId} />
              ) : (
                <ReadOnlyRow data={row} setEditId={setEditId} />
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
    <TableRow key={row.id}>
      <TableCell sx={{ width: "200px"}}>
        <S.styledCell>
          <S.Ball bColor={row.color} />
          <span>{row.name}</span>
        </S.styledCell>
      </TableCell>
      <TableCell>{row.type}</TableCell>
      <TableCell align="right">
        <Edit color="success" onClick={() => setEditId(row.id)} />
      </TableCell>
      <TableCell align="right" sx={{ width: "50px"}}colSpan={0}>
        <DeleteOutline
          color="error"
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
  const [type, setType] = useState(row.type);
  const [color, setColor] = useState(row.color);

  //Update method
  const handleUpdate = (id) => {
    dispatch(UpdateRow({ id: id, name, type, color }));
    setEditId(null);
  };

  return (
    <TableRow key={row.id}>
      <TableCell>
        <S.styledCell>
          <S.EditColorInput
            type="color"
            value={color}
            onChange={(self) => setColor(self.target.value)}
          />
          <S.StyledEditInput
            type="text"
            placeholder="Atualize o nome"
            value={name}
            onChange={(self) => setName(self.target.value)}
          />
        </S.styledCell>
      </TableCell>
      <TableCell>
        <S.StyledEditInput
          type="text"
          placeholder="Atualize o tipo"
          value={type}
          onChange={(self) => setType(self.target.value)}
        />
      </TableCell>
      <TableCell align="right" sx={{ cursor: "pointer", color: "#079784" }}>
        <strong onClick={() => handleUpdate(row.id)}>Atualizar</strong>
      </TableCell>
      <TableCell align="right" sx={{ cursor: "pointer", color: "red" }}>
        <strong onClick={() => setEditId(null)}>Cancelar</strong>
      </TableCell>
    </TableRow>
  );
};
