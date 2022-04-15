import * as React from 'react';
import { useState } from 'react';
import { faSearch, faArrowDownZA } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchBar from '../SearchBar/SearchBar';

const columns = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'tipo', label: 'Tipo', minWidth: 100 },
  {
    id: 'data',
    label: 'Data',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'transaction',
    label: 'Transacao',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'total',
    label: 'Total',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, tipo, data, transaction , status,total) {
  // const sum = total ;
  return { name, tipo, data, transaction, status, total};
}

const rows = [
  createData('Marcos da Silva', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData('Amorim\'s Lounge', 'Estabelecimento', "23/06/2021", "Cartao","Pago", "R$1200"),

  createData('Fernanda Machado', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData('Shakespeare e Companhia', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData('La Pergola', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData('Aline do Amaral', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData('Spikel', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData('La Pergolas', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200")
  
];

export default function TableComponent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  //method for searching
  //set search
  const [query,setQuery] = useState("");
  // console.log(query);

  return (
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
                Financeiro
              </TableCell>

            </TableRow>

          <TableRow>

              <TableCell align="center" colSpan={2}>
              
              {/* este componente serve para fazer buscas*/}
              <div>
                <form className='border border-none'>
                    <div className="border border-black rounded-full flex justify-around p-0">
                        <input 
                        type="text" 
                        value={query}
                        className='border border-none outline outline-none bg-transparent pl-2 m-0'
                        placeholder='Pesquisar'
                        onChange={(SearchWord)=>setQuery(SearchWord.target.value.toLowerCase())}
                        />
                        <button className='text-lg' type='submit'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>
                </form>
              </div>

              </TableCell>

              <TableCell align="center" colSpan={3}>
                <TablePagination
                    rowsPerPageOptions={[5,10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className = "bg-white"
                    labelRowsPerPage = "Monstrar"
                    sx = {
                      {

                        '& .MuiTablePagination-actions' : {
                          display : 'none'
                        },
                        
                        '& .MuiTablePagination-displayedRows' : {
                          display : "none"
                        },
                      }

                    }
                    
                />

              </TableCell>

              <TableCell
                sx = {{
                  display : "flex",
                  justifyContent : "center"
                }}
              >
                <div className = "shadow-md align-center px-10 py-2 rounded-lg text-center">
                  <h1 className='text-lg'>Total</h1>
                  <h2>R$ {1200000}</h2>
                </div>
              </TableCell>
              
            </TableRow>

            <TableRow>
              {columns.map((column) => (

                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                  <FontAwesomeIcon icon={faArrowDownZA} className="px-1 text-xs"/>
                </TableCell>

              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
            {/*  Esta funcao serve para fazer filter ou fazer buscas */}
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
              .filter(row => row.name.toLowerCase().includes(query))
              .map((row) => {


                return (
                  <TableRow hover tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}
                        >

                          {
                            // column.format && typeof value === 'number' ? column.format(value) : value
                          value == "Pago" ? <span className='text-green-600'>Pago</span> : value && value == "Pendente" ? <span className='text-orange-600'>Pendente</span> :value
                          
                          }

                        </TableCell>
                      );
                    })}
                  </TableRow>
                );

              })}


          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
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
  );
}
