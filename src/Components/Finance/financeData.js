export default function FinanceData(){
/*Este sao dados para monstrar na tabela (COLUMNS)! 
Como estamos na fase de teste, usei estes dados como amostra
*/

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


/*
  Esta funcao serve cara criar dados em forma organizada
  Para facilitar mostrar na tabela
*/
function createData(id,name, tipo, data, transaction , status,total) {
  // const sum = total ;
  return {id,name, tipo, data, transaction, status, total};
}

/*Este sao dados para monstrar na tabela (ROWS)! 
Como estamos na fase de teste, usei estes dados como amostra
 @importante => Seguindo  a funcao criada acima
*/

const rows = [
  createData(1,'Marcos da Silva', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData(2,'Amorim\'s Lounge', 'Estabelecimento', "23/06/2021", "Cartao","Pago", "R$1200"),

  createData(3,'Fernanda Machado', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData(4,'Shakespeare e Companhia', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData(5,'La Pergola', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData(6,'Aline do Amaral', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData(7,'Spikel', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),

  createData(8,'La Pergolas', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200")
  
];


return {columns,rows}

}