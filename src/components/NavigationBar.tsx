import React, { useMemo } from 'react'
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import {useDispatch} from "react-redux";
import {logout} from "../appState/baseSlice";
import StyledLink from './StyledLink';

export default function NavigationBar() {
  const dispatch = useDispatch();
  return (
      <Box bgcolor='common.white'>
        <Container fixed sx={{pt: 2, pb: 2, mb: 2}} >
          <Grid container spacing={2}>
            <NavigationItem link="/">Products</NavigationItem>
            <NavigationItem link="/search">Search</NavigationItem>
            <NavigationItem link="/cart">Cart</NavigationItem>
            <Grid item>
              <div onClick={() => dispatch(logout())} style={{cursor: "pointer"}}>
                <Typography variant="subtitle1" color="secondary.main"><strong>Logout</strong></Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
  )
}

const NavigationItem = ({link, children}) => {
  // const location = useLocation();
  // const isActive = useMemo(() => link === location.pathname, [link, location.pathname])
  const isActive = false
  const style = useMemo(() => isActive ? {fontWeight: 'bold'} : undefined, [isActive])
  const color = useMemo(() => isActive ? 'primary.main' : 'text.secondary', [isActive])

  return (
    <Grid item>
      <StyledLink link={link} style={style} color={color}>{children}</StyledLink>
    </Grid>
  )
}
