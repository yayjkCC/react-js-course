import LinearProgress from '@mui/material/LinearProgress';
import { Box, Container } from '@mui/material';

export default function Loading() {
  return (
    <Container fixed>
        <Box sx={{
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          flexDirection: "column",
          height: "100vh"
        }}>
            Loading
            <Box sx={{width: "50%", marginTop: "32px"}}>
                <LinearProgress color='secondary'/>
            </Box>
        </Box>
    </Container>
  )
}
