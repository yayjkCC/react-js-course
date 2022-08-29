import { Button, Card, CardActions, CardContent, TextField, Stack } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { mockLogin } from '../appState/baseSlice';
import StyledLink from '../components/styledLink';

export default function Login() {
  const dispatch = useDispatch();

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
          <StyledLink link="/register" color="secondary.main">Go to register</StyledLink>
        </Stack>
      </CardActions>
    </Card>
  )
}
