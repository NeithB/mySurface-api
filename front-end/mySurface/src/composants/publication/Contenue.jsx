import React, { useEffect, useState } from 'react'
import { Avatar, Box, Link, Stack, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';


export default function Contenue({p}) {
 

    return (
        
        <>              
                   <Box padding={2} bgcolor={"#F4F6F8"} borderRadius={4} >             

                    <Stack direction={"row"} gap={2} padding={0}>                       
                        <Avatar src=""/>
                        <Typography variant='h6' sx={{marginTop:"2px", marginBottom:"15px"}}>{p.user?.nom} {p.user?.prenom}  </Typography> 

                    </Stack>
                        <Typography variant='P' sx={{marginLeft:"7px"}}>{p.message}</Typography>    

                    <hr className=''/>
                    
                    <img src={p.url} width={"100%"} />
                    <hr />
                    <Stack direction={"row"} gap={10} padding={-10} alignItems={"center"} justifyContent={"center"}>
                            <p><a href="/" style={{textDecoration:"none", color:"#646565"}}>< ThumbUpOutlinedIcon sx={{color:"##626263"}}/> Like</a></p>
                            <p style={{color:"#646565"}}><ModeCommentOutlinedIcon/> commenter</p>
                            <p style={{color:"#646565"}}><ReplyOutlinedIcon />Partager</p>

                    </Stack>

                    </Box>
                               
        </>
   
  )
}
