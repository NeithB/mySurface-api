import React, { useEffect, useState } from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'


export default function Contenue({p}) {
 

    return (
        
        <>              
                   <Box padding={3} bgcolor={"#F4F6F8"} borderRadius={4} >             

                    <Stack direction={"row"} gap={2} padding={1}>                       
                        <Avatar src=""/>
                        <Typography variant='h6' sx={{marginTop:"9px"}}>{p.user?.nom} {p.user?.prenom}  </Typography> 

                    </Stack>
                        <Typography variant='P' sx={{marginLeft:"20px"}}>{p.message}</Typography>    

                    <hr className=''/>
                    
                    <img src={p.url} width={"100%"} />

                    </Box>
                               
        </>
   
  )
}
