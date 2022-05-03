export default function CategoryData(){
/*Este sao dados para monstrar na tabela (COLUMNS)! 
Como estamos na fase de teste, usei estes dados como amostra
*/

const columns = [
  { id: 'name', label: 'Nome',align : "left"},
  { id: 'date', label: 'Data', align : "left"},
  { id: 'start', label: 'Inicio', align : "left"},
  { id: 'entrance', label: 'Entrada', align : "left" },
  { id: 'local', label: 'Local', align : "left" },
  { id: 'edit', label: 'Editar', align : "right" },
  { id: 'delete', label: 'Excluir', align : "right" }
];


/*
  Esta funcao serve cara criar dados em forma organizada
  Para facilitar mostrar na tabela
*/
function createData(id,name,date,start,entrance,local) {
  return {id,name,date,start,entrance,local};
}

/*Este sao dados para monstrar na tabela (ROWS)! 
Como estamos na fase de teste, usei estes dados como amostra
 @importante => Seguindo  a funcao criada acima
*/

const rows = [
  createData(1,"Luzes da torre","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(2,"Cidade de Mexico","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(3,"Brazilia","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(4,"Havai","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(5,"Tailandia","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(6,"EUA","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(7,"portugal","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(8,"Luzes da torre","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(9,"Luzes da torre","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(10,"Tailandia","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(11,"Cidade de Mexico","23/07/2021", "20:00h","$9","Torre Eiffel-Paris"),
  createData(12,"Tailandia","23/07/2021", "20:00h","$9","Torre Eiffel-Paris")
];

// console.log(rows);


return {columns,rows}

}