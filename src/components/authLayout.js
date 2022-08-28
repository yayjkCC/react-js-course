import React from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function AuthLayout({children}) {
  return (
    <>
      <Container fixed>
        <Box height="100vh" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {children}
        </Box>
      </Container>
    </>
  )
}
