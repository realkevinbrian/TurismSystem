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
  }
  ,
  {
    id: 'transaction',
    label: 'Transacao',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
  ,
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
  }
];

return {columns}
}