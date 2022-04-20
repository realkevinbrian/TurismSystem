import * as React from 'react';
import { useState } from 'react';
import { faSearch, faArrowDownZA } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
import { Search } from '@material-ui/icons';
import TableData from '../Table/TableData.jsx';
import { CreateData,Rows,Columns} from '../Table/Functions';
import TableLabels from '../Table/TableLabels.jsx';

function Finance() {

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


  const TableTitle = "Financeiro";
  const total = 1500;

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
                  justifyContent : "center"
                }}
              >
                <div className = "shadow-md align-center px-10 py-2 rounded-lg text-center">
                  <h1 className='text-lg'>Total</h1>
                  <h2>R$ {total}</h2>
                </div>
              </TableCell>
              
          </TableRow>

          <TableRow>
            <TableLabels data={Columns}/>
          </TableRow>

          </TableHead>          
          <TableBody>
            {

              <TableData 
              data = {Rows} 
              other={[...allData]}/>

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

export default Finance