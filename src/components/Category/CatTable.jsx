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

  /*
    Funcao para fazer buscas

  */
  

export default function CatTable() {
  return (
    <div className='Container'>
        
    </div>
  )
}
