import React from 'react'
import Header from '../commun/Header'
import Publication from '../publication/Publication'
import { Box } from '@mui/material'

export default function Interface() {
  return (
    <div>
        <Box>       
                <Header/>
                <Publication/>
        </Box>

    </div>
  )
}
