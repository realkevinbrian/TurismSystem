import React from 'react'

// Aqui importamos todas bibliotecas neccessarias para crar a tabela
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';


/*
DATA
*/
/*
  Esta funcao serve cara criar dados em forma organizada
  Para facilitar mostrar na tabela
*/
function createData(id,nome, tipo) {
    return { id,nome, tipo,};
  }
  
  /*Este sao dados para monstrar na tabela (ROWS)! 
  Como estamos na fase de teste, usei estes dados como amostra
   @importante => Seguindo  a funcao criada acima
  */
  
  const rows = [
    createData(1, "Restaurante", "Estabelecimento"),
    createData(2, "Comercio", "Estabelecimento"),
    createData(3, "Balada", "Ponto Turisticos/Roteiro"),
    createData(4, "Comercio", "Estabelecimento"),
    createData(5, "Comercio", "Estabelecimento"),
    createData(6, "Comercio", "Estabelecimento"),

  ];

  
  //labels
  const columns = [
      {id : 1, label : "Nome", align : "left"},
      {id : 2, label : "Tipo", align : "left"},
      {id : 3, label : "Editar", align : "right"},
      {id : 4, label : "Excluir", align : "right"}
  ]



export default function CatTable() {
  return (
    <div className='Container'>
        
        <Paper className="mt-12 p-4">
            <TableContainer>
                <Table>

                    <TableHead>

                        <TableRow className='text-xl font-bold pl-4'>
                           <TableCell sx={{border : "none", fontSize : "1.6rem", fontWeight : "bold"}}>
                                Cadastro de Categorias
                           </TableCell>
                        </TableRow>

                        <TableRow>

                            <TableCell>
                                <SearchBar/>
                            </TableCell>

                            <TableCell>
                                <SearchBar/>
                            </TableCell>

                            <TableCell>
                                Mostrar {5} Registos
                            </TableCell>

                            <TableCell align="right">
                                <Link to="/" className='border p-3 rounded-full bg-cyan-800 text-white font-bold hover:bg-cyan-600'>Cadastrar novo</Link>
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        <TableRow>
                            {
                                columns.map((column)=>{
                                    return(
                                        <TableCell key={column.id} align={column.align}>
                                            {column.label}
                                        </TableCell>
                                    )
                                })
                            }

                        </TableRow>

                    {
                        rows.map((row)=>{
                            console.log(row)
                            return(
                                <TableRow key={row.id}>
                                    {
                                        columns.map((column)=>{
                                            return(
                                                (column.id === 1) ? 
                                                <TableCell>{row.nome}</TableCell> : 
                                                (column.id === 2) ? 
                                                <TableCell>{row.tipo}</TableCell> : 
                                                (column.id === 3 ) ? 
                                                <TableCell align={column.align} ><Link to={`/admin/${row.id}`} className="text-cyan-600"><Edit/></Link></TableCell> : 
                                                <TableCell align={column.align} ><Link to={`/admin/${row.id}`} className="text-red-600"><Delete/></Link></TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                    </TableBody>

                </Table>
            </TableContainer>
        </Paper>

    </div>
  )
}
