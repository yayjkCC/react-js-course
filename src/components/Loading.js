import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Box, Container } from '@mui/material';

export default function Loading() {
  return (
    <Container fixed>
        <Box height="100vh" width="100vw" sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            Loading
            <Box sx={{width: "50%", marginTop: "32px"}}>
                <LinearProgress color='secondary'/>
            </Box>
        </Box>
    </Container>
  )
}
