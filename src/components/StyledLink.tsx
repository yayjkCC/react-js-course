import { Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'

export default function StyledLink({children, link, style, color}) {
  return (
    <Link href={link} style={{textDecoration: 'none'}}>
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
