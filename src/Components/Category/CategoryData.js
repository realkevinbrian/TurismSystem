export default function CategoryData(){
/*Este sao dados para monstrar na tabela (COLUMNS)! 
Como estamos na fase de teste, usei estes dados como amostra
*/

const columns = [
  { id: 'name', label: 'Nome',align : "left"},
  { id: 'type', label: 'Tipo', align : "left"},
  { id: 'edit', label: 'Editar', align : "right" },
  { id: 'delete', label: 'Excluir', align : "right" }
];


/*
  Esta funcao serve cara criar dados em forma organizada
  Para facilitar mostrar na tabela
*/
function createData(id,name, type) {
  const editId = id ;
  const deleteId = id ;
  return { id,name, type,editId,deleteId};
}

/*Este sao dados para monstrar na tabela (ROWS)! 
Como estamos na fase de teste, usei estes dados como amostra
 @importante => Seguindo  a funcao criada acima
*/

const rows = [
  createData(1,'restaurante', 'Estabelecimento'),
  createData(2,'comercio', 'Ponto Turistico'),
  createData(3,'balada', 'Roteiro'),
  createData(4,'livraria', 'Roteiro'),
  createData(5,'lazer', 'Roteiro'),
  createData(6,'bar', 'Roteiro'),
  createData(7,'cultural', 'Estabelecimento')
  
];


return {columns,rows}

}