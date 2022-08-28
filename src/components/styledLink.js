import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function StyledLink({children, link, style, color}) {
  return (
    <Link to={link} style={{textDecoration: 'none'}}>
        <Typography 
          variant='subtitle1' 
          style={style} 
          color={color}
        >
          {children}
        </Typography>
      </Link>
  )
}
