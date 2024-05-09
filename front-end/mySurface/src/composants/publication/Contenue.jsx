import React, { useEffect, useState } from 'react'
import { Avatar, Box, Link, Stack, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import dayjs from "dayjs";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePub } from '../../axios/PublicationService';
import { useNavigate } from 'react-router-dom';




export default function Contenue({pub}) {

  const user=JSON.parse(localStorage.getItem('user'))

  const navigator=useNavigate()

  const useQuery=useQueryClient() 
  const mutation=useMutation({
        mutationFn:(id)=>{
          return deletePub(id)
          },
          onError:(error)=>{
              toast.error("Une erreur est survenue")
          },
          onSuccess:()=>{
              useQuery.invalidateQueries("pubs")
              toast.success("Suppression effectuée")    
          }
  })

  function supprimer(id){
    mutation.mutate(id)
    console.log(id)
  }
 function direction(id){
    navigator("/commentaire/"+id)
 }

    return (
      <Box borderRadius={4} width={"100%"} bgcolor={"#F8F8F8"} padding={2} marginBottom={1}>

                                  <Stack direction={"row"} gap={2} padding={0}>                       
                                      <Avatar src=""/>
                                      <Typography variant='h6' sx={{marginTop:"2px", marginBottom:"15px"}}>{pub.user?.nom} {pub.user?.prenom}  </Typography> 
                                      <Typography variant='p' sx={{marginTop:"7px", marginBottom:"15px",marginLeft:5, color:"#90A9B6"}}><em>{         
                                        dayjs(pub.datePub).format("dddd, d MMM YYYY")             
                                        }</em></Typography> 
                                        {       
                                          user.id==pub.user.id && 
                                        
                                               <IconButton  aria-label="delete" size="large" onClick={()=>supprimer(pub.id)}>
                                               <DeleteIcon />
                                             </IconButton>
                                        }
                                       
                                                   
                                  </Stack>

                                      <Typography variant='P' sx={{marginLeft:"7px"}}>{pub.message}</Typography>                 
                                  <hr className=''/>                                 
                                  <img src={pub.url} width={"100%"}/>
                                  <hr />
                                  <Stack direction={"row"} gap={10} padding={-10} alignItems={"center"} justifyContent={"center"}>
                                          <p><a href="/" style={{textDecoration:"none", color:"#646565"}}>< ThumbUpOutlinedIcon sx={{color:"##626263"}}/> Like</a></p>
                                          <p ><a onClick={()=>direction(pub.id)}  style={{textDecoration:"none", color:"#646565"}}><ModeCommentOutlinedIcon/> commenter</a></p>
                                          <p style={{color:"#646565"}}><ReplyOutlinedIcon />Partager</p>
              
                                  </Stack>
                            </Box>
   
  )
}
