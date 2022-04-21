import React,{useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableLabels from "../Table/TableLabels.jsx"
import AgendaData from './AgendaData';
import Button from "../Button";

/*
DATA
*/
/*
  Esta funcao serve cara criar dados em forma organizada
  Para facilitar mostrar na tabela
*/
function createData(Id,Nome, Data, Inicio, Entrada, Local){
  return { Id,Nome, Data,Inicio, Entrada, Local};
}

/*Este sao dados para monstrar na tabela (ROWS)! 
Como estamos na fase de teste, usei estes dados como amostra
 @importante => Seguindo  a funcao criada acima
*/

const Rows = [
  createData(1, "Luzes da torre", "23/07/2021", "20:00h", "$9", "Torre Eiffel-Paris"),
  createData(2, "Luzes da torre", "23/07/2021", "20:00h", "$9", "Torre Eiffel-Paris"),
  createData(3, "Luzes da torre", "23/07/2021", "20:00h", "$9", "Torre Eiffel-Paris"),
  createData(4, "Luzes da torre", "23/07/2021", "20:00h", "$9", "Torre Eiffel-Paris"),
  createData(5, "Luzes da torre", "23/07/2021", "20:00h", "$9", "Torre Eiffel-Paris"),
  createData(6, "Luzes da torre", "23/07/2021", "20:00h", "$9", "Torre Eiffel-Paris"),
  createData(7, "Luzes da torre", "23/07/2021", "20:00h", "$9", "Torre Eiffel-Paris"),
  createData(8, "Luzes da torre", "23/07/2021", "20:00h", "$9", "Torre Eiffel-Paris"),

];


//labels
const Columns = [
    {id : 1, label : "Nome", align : "left"},
    {id : 2, label : "Data", align : "left"},
    {id : 3, label : "Inicio", align : "left"},
    {id : 4, label : "Entrada", align : "left"},
    {id : 5, label : "Local", align : "right"},
    {id : 6, label : "Editar", align : "right"},
    {id : 7, label : "Excluir", align : "right"}
]


//



function Agenda() {

   //Este state serve para trocar de pagina ao clickar o botao de next
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(5);
 
   //Esta funcao serve para trocar de pagina ao clickar o botao de next
   const handleChangePage = (event, newPage) => {
     setPage(newPage);
   };
    //Esta funcao serve para verificar quantos (ROWS) em dados temos
   const handleChangeRowsPerPage = (event) => {
     setRowsPerPage(+event.target.value);
     setPage(0);
   };
 
 
   //Este state serve para pegar o estado da Busca
   const [query,setQuery] = useState("");
   function SearchTable (search) {
     setQuery(search)
   }
 
   //Groupado para components
   const allData = [page,rowsPerPage,query,Columns]; 
 
 
  const TableTitle = "Agenda Cultural";
    

  return (

    <div className=' pt-10'>
      <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius : '20px'}} className = "p-4">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>

            <TableRow>
                <TableCell 
                colSpan={2}
                style={{
                  border : "none",
                  fontSize : "1.8rem",
                  fontWeight : "bold",
                  paddingBottom : "0px"
                }}
                >
                  {TableTitle}
                </TableCell>
            </TableRow>

          <TableRow>

              <TableCell align="center" colSpan={2}>   
                  <SearchBar handleQuery={SearchTable}/>
              </TableCell>

              <TableCell align="center" colSpan={3}>
                
                <TablePagination
                    rowsPerPageOptions={[5,10, 25, 100]}
                    component="div"
                    count={Rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className = "bg-white"
                    labelRowsPerPage = "Monstrar"
                    sx = {{'& .MuiTablePagination-actions .MuiTablePagination-displayedRows' : { display : 'none'}}}
                 />
                 
              </TableCell>

              {/* Aqui contem o componente que mostra o total */}
              <TableCell
                sx = {{
                  display : "flex",
                  justifyContent : "right"
                }}
              >
              <Button title="Cadastrar Novo" goto="/admin"/>
              </TableCell>
              
          </TableRow>

          <TableRow>
            <TableLabels data={Columns}/>
          </TableRow>
          </TableHead>          
          
          <TableBody>
            {
              <AgendaData
                data = {Rows} 
                other={[...allData]}
              />
            } 
          </TableBody>
        
        </Table>
      </TableContainer>

      {/* Aqui contem Pagination da tabela/ ver outros dados ( SEE OTHER ROWS) */}
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={Rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className = "bg-white"
        labelRowsPerPage = {false}
        sx = {
          {

            '& .MuiTablePagination-select, &.MuiSelect-nativeInput,& .css-yf8vq0-MuiSelect-nativeInput, & .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon' : {
              display : "none"
            },
            
            '& .MuiTablePagination-displayedRows' : {
              display : "block"
            },

            '& .css-8t3sgi-MuiTablePagination-root, & .MuiTablePagination-displayedRows' : {
              display : "none"
            },
            '& .css-zylse7-MuiButtonBase-root-MuiIconButton-root, &.Mui-disabled' : {
              border : "1px solid #155e75",
              padding : "0px",
              margin : "10px",

              '& :hover' : {
                backgroundColor : "red"
              }
            }
          }

        }
      />
    </Paper>

    </div>
  )
}

export default Agenda