import React from 'react'
import NavigationBar from '../components/navigationBar'
import Container from '@mui/material/Container';

export default function AppLayout({children}) {
  return (
    <>
      <NavigationBar />
      <Container fixed>{children}</Container>
    </>
  )
}
