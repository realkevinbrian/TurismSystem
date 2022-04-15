import React from 'react';
import TableComponent from '../Table/TableComponent';

// Este componente serve para mostrar a tabela financeira

function Finance() {
  return (
    <div className=' pt-10'>

      {/* Este componente serve para monstrar dados na tabela(Table) */}
        <TableComponent/>

    </div>
  )
}

export default Finance