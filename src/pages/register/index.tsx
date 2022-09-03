import { Button, Card, CardActions, CardContent, TextField, Stack } from '@mui/material'
import React from 'react'
import { login } from '../../appState/baseSlice';
import { useAppDispatch } from '../../appState/store';
import AuthLayout from '../../components/AuthLayout';
import StyledLink from '../../components/StyledLink';

function Register() {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardContent>
        <Stack>
          <TextField label="Username" variant="outlined" sx={{mb: 2}}/>
          <TextField label="Email" variant="outlined" sx={{mb: 2}}/>
          <TextField label="Password" variant="outlined" type="password" sx={{mb: 2}}/>
          <TextField label="Confirm Password" variant="outlined" type="password"/>
        </Stack>
      </CardContent>
      <CardActions style={{justifyContent: "center"}}>
        <Stack>
          <Button onClick={() => dispatch(login())} variant="contained" sx={{mb: 1}}>Register</Button>
          <StyledLink link="/login" color="secondary.main" style={{textAlign: 'center'}}>Go to Login</StyledLink>
        </Stack>
      </CardActions>
    </Card>
  )
}

Register.getLayout = AuthLayout
Register.isProtected = false

export default Register