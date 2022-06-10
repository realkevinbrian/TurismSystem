import { Dialog } from '@mui/material'
import React from 'react'

function index({children}) {
  return (
    <Dialog open = {true}>
        {children}
    </Dialog>
  )
}

export default index