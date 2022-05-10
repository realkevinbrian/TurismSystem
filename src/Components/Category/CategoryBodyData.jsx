import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TableCell, TableRow } from '@mui/material';
import React, {useState} from 'react';
import * as S from "./styled";
import { useSelector,useDispatch } from 'react-redux';
import { selectAll, DeleteRow, UpdateRow } from '../../features/CategorySlice';

/****
 * BODY DATA FOR Category TABLE TO MAKE OUR TABLE REUSABLE
 */

export function CategoryBodyData() {

  //get QUERY_BYSTRING AND QUERY_BYNUM
  const query = useSelector(state => state.query.query_string);
  const queryNum = useSelector(state => state.query.queryByNumber);
  const categoryData = useSelector(selectAll);
  const [editRowId, setEditId] = useState(null)
  

  return (
    <>
      {
        categoryData.filter(row => row.name.toLowerCase().includes(query))
        .slice(0,queryNum)
        .map((row) => {
          return (
            <React.Fragment>
              { (row.id === editRowId) ? <EditableRow data={row} setEditId={setEditId}/>
              : <ReadOnlyRow data={row} setEditId={setEditId}/>
              }
            </React.Fragment>
          );
        })}
    </>
  );

}


/***
 * Read Only Row
 */

export const ReadOnlyRow = ({data:row,handleDelete,setEditId}) =>{
  const dispatch = useDispatch();

  return(
      <TableRow key={row.id}>
        <TableCell>
          {(row.name === "restaurante") ? <S.styledCell><S.Ball bColor ={"#c85ba9"}/><span>{row.name}</span></S.styledCell>
            : (row.name === "comercio") ? <S.styledCell><S.Ball bColor ={"#95a28e"}/><span>{row.name}</span></S.styledCell>
              : (row.name === "balada") ? <S.styledCell><S.Ball bColor ={"#ed5252"}/><span>{row.name}</span></S.styledCell>
                : (row.name === "livraria") ? <S.styledCell><S.Ball bColor ={"#95a28e"}/><span>{row.name}</span></S.styledCell>
                  : (row.name === "lazer") ? <S.styledCell><S.Ball bColor ={"#61be8c"}/><span>{row.name}</span></S.styledCell>
                    : (row.name === "bar") ? <S.styledCell><S.Ball bColor ={"#f4a072"}/><span>{row.name}</span></S.styledCell>
                      : (row.name === "cultural") ? <S.styledCell><S.Ball bColor ={"#789aff"}/><span>{row.name}</span></S.styledCell> 
                        : <S.styledCell><S.Ball className='bg-cyan-900' /><span>{row.name}</span></S.styledCell>}
        </TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell align="right"><S.Edit className='text-cyan-900 text-lg' onClick={()=>setEditId(row.id)}><FontAwesomeIcon icon={faEdit} /></S.Edit></TableCell>
        <TableCell align="right" sx={{margin:"10px"}} colSpan={0}><S.Edit className='text-red-500 text-lg'><FontAwesomeIcon icon={faDeleteLeft} onClick={()=>dispatch(DeleteRow({id : row.id}))}/></S.Edit></TableCell>
      </TableRow>
  )
}


/**
 * Editable Row
 */

 export const EditableRow = ({data:row,setEditId}) =>{
   
  const dispatch = useDispatch();
   //Grap our form edit values
   const [name, setName] = useState(null);
   const [type, setType] = useState(null);

   //Update method
   const handleUpdate = (id) =>{
    dispatch(UpdateRow({id : id, name, type}))
    setEditId(null);

  }


  return(
      <TableRow key={row.id}>
        <TableCell>
          <S.StyledEditInput 
          type="text" placeholder='Atualize Nome'
          onChange={(self) => setName(self.target.value)}
          />
        </TableCell>
        <TableCell>
          <S.StyledEditInput 
          type="text" placeholder='Atualize Tipo'
          onChange={(self) => setType(self.target.value)}
          />
        </TableCell>
        <TableCell align="right"><S.Edit className='text-cyan-900' onClick={() => handleUpdate(row.id)}>Atualizar</S.Edit></TableCell>
        <TableCell align="right"><S.Edit className='text-red-500' onClick={() => setEditId(null)}>Cancelar</S.Edit></TableCell>
      </TableRow>
  )
}