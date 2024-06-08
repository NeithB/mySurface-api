import React, { useEffect, useState } from 'react'
import { Avatar, Box, Link, Stack, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import dayjs from "dayjs";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deletePub } from '../../axios/PublicationService';
import { useNavigate } from 'react-router-dom';
import Publication from './Publication';
import { createLike, getExitLike } from '../../axios/likeService';






export default function Contenue({pub}) {

  const user=JSON.parse(localStorage.getItem('user'))


  const navigator=useNavigate()

  const queryClient=useQueryClient() 

  const idPub=0;

  const mutation=useMutation({
        mutationFn:(id)=>{
          return deletePub(id)
          },
          onError:(error)=>{
              toast.error("Une erreur est survenue")
          },
          onSuccess:()=>{
              queryClient.invalidateQueries("pubs")
              toast.success("Suppression effectuée")    
          }
  })

  const mutationLike=useMutation({
    mutationFn:(idUser,idPub)=>{
      return deleteLike(idUser,idPub)
      },
      onError:(error)=>{
          toast.error("Une erreur est survenue")
      }
     
})

// Fonction supprimer 
  function supprimer(id){
    mutation.mutate(id)
    console.log(id)
  }
  // Fonction commenter
 function direction(id){
    navigator("/commentaire/"+id)
 }

 // Mutation pour la fonction liker
 const mute=useMutation({
  mutationFn:(like)=>{
      return createLike(like)
  },
  onError:(error)=>{
      queryClient.invalidateQueries("pubs")
      toast.error("Une erreur est survenue")
  },
  onSuccess:()=>{
      toast.success("liker effectuée")     
  }
 
})

 function liker(id){ 
    const like={
      idLikeUser : user.id,
      idLikePub : id,
    }
    mute.mutate(like)      
 }

const {data:existLike}=useQuery({ 
  queryKey:['likes'],
  queryFn:()=>getExitLike(user.id,pub.id)?.then((res)=>res.data),      
  onerror:(error)=>console.log("Une erreur est survenue"+error),
})




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
                                  <Typography variant='P'  sx={{margin:"auto", color:"#646565"}}><em><span className='text-primary' style={{  }}>{pub.nbreLike} likes </span> </em></Typography>  
                                  <hr style={{margin:'1px'}} />
                                  <Stack direction={"row"} gap={10} padding={-10} alignItems={"center"} justifyContent={"center"}>
                                      {
                                        existLike?.publication?.statut==1 ? <p><a onClick={()=>liker(pub.id)} style={{textDecoration:"none", color:"blue"}}>< ThumbUpOutlinedIcon sx={{color:"##626263"}}/> J'aime</a></p>
                                                  :  <p><a onClick={()=>liker(pub.id)} style={{textDecoration:"none", color:"#646565"}}>< ThumbUpOutlinedIcon sx={{color:"##626263"}}/> J'aime</a></p>
                                                
                                        }
                                    
                                          <p ><a onClick={()=>direction(pub.id)}  style={{textDecoration:"none", color:"#646565"}}><ModeCommentOutlinedIcon/> commenter</a></p>
                                          <p style={{color:"#646565"}}><ReplyOutlinedIcon />Partager</p>
              
                                  </Stack>
                            </Box>
   
  )
}
