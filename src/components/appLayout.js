import React from 'react'
import NavigationBar from './navigationBar'
import Container from '@mui/material/Container';

export default function AppLayout(page) {
  return (
    <>
      <NavigationBar />
      <Container fixed>{page}</Container>
    </>
  )
}
