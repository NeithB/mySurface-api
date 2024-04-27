import React, { useEffect, useState } from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { getPub } from '../../axios/PublicationService'

export default function Contenue() {
    const [pubs, setPubs]=useState([])

    
    useEffect(()=>{
        getPub().then((res)=>{
            setPubs(res.data)
        })
        console.log(pubs)

    },[])

    return (
        
        <Box>
                {   
                    pubs.map((pub)=>

                    <Stack bgcolor={"#ffffff"} direction={"row"} gap={2} padding={3}>
                        <Avatar src=""/>
                        <Typography variant='p'>{pub.user.nom} {pub.user.prenom}  </Typography>                  
                        <img src={pub.url} width={"100%"} />
                    </Stack>
                    )
                }           
        </Box>





    
  )
}
