import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function navigationBar() {
  return (
      <Box bgcolor='common.white'>
        <Container fixed sx={{pt: 2, pb: 2, mb: 2}} >
          <Grid container spacing={2}>
            <NavigationItem link="/">Products</NavigationItem>
            <NavigationItem link="/search">Search</NavigationItem>
            <NavigationItem link="/cart">Cart</NavigationItem>
          </Grid>
        </Container>
      </Box>
  )
}

const NavigationItem = ({link, children}) => {
  const location = useLocation();
  const isActive = useMemo(() => link === location.pathname, [link, location.pathname])

  return (
    <Grid item>
      <Link to={link} style={{textDecoration: 'none'}}>
        <Typography 
          variant='subtitle' 
          style={isActive ? {fontWeight: 'bold'} : undefined} 
          color={isActive ? 'primary.main' : 'text.secondary'}
        >
          {children}
        </Typography>
      </Link>
    </Grid>
  )
}
