export const columns = [
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
export function createData(name, tipo, data, transaction , status,total) {
  // const sum = total ;
  return { name, tipo, data, transaction, status, total};
}
  
export const rows = [
    createData('Marcos da Silva', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),
  
    createData('Amorim\'s Lounge', 'Estabelecimento', "23/06/2021", "Cartao","Pago", "R$1200"),
  
    createData('Fernanda Machado', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),
  
    createData('Shakespeare e Companhia', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),
  
    createData('La Pergola', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),
  
    createData('Aline do Amaral', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),
  
    createData('Spikel', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200"),
  
    createData('La Pergolas', 'Guia Turístico', "23/07/2021", "Boleto","Pendente", "R$1200")
    
  ];

