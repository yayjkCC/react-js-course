import React from 'react'
import Typography from '@mui/material/Typography'


export default function PageHeader({children}) {
  return (
    <Typography variant='h4' gutterBottom color="text.secondary">
        <strong>{children}</strong>
    </Typography>
  )
}
