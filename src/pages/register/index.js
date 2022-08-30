import { Button, Card, CardActions, CardContent, TextField, Stack } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../appState/baseSlice';
import AuthLayout from '../../components/authLayout';
import StyledLink from '../../components/styledLink';

function Register() {
  const dispatch = useDispatch();

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

export default Register