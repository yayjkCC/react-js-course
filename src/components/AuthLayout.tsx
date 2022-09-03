import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function AuthLayout(page: JSX.Element) {
  return (
    <>
      <Container fixed>
        <Box height="100vh" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {page}
        </Box>
      </Container>
    </>
  )
}
