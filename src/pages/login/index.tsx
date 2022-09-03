import { Button, Card, CardActions, CardContent, TextField, Stack } from '@mui/material'
import React from 'react'
import { mockLogin } from '../../appState/baseSlice';
import StyledLink from '../../components/StyledLink';
import AuthLayout from '../../components/AuthLayout'
import { useAppDispatch } from '../../appState/store';

function Login() {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardContent>
        <Stack>
          <TextField label="Username" variant="outlined" sx={{mb: 2}}/>
          <TextField label="Password" variant="outlined" type="password"/>
        </Stack>
      </CardContent>
      <CardActions style={{justifyContent: "center"}}>
        <Stack>
          <Button onClick={() => dispatch(mockLogin())} variant="contained" sx={{mb: 1}}>Login</Button>
          <StyledLink link="/register" color="secondary.main" style={{}}>Go to register</StyledLink>
        </Stack>
      </CardActions>
    </Card>
  )
}

Login.getLayout = AuthLayout
Login.isProtected = false

export default Login
