import React from 'react'
import { Stack } from '@mui/material'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createLike } from '../../axios/likeService';

function BarLike({pub}) {

    const user=JSON.parse(localStorage.getItem('user'))

    
const queryClient=useQueryClient()


const mutation=useMutation({
    mutationFn:(like)=>{
        return createLike(like)
    },
    onError:(error)=>{
        toast.error("Une erreur est survenue")
    },
    onSuccess:()=>{
        reset()
        queryClient.invalidateQueries("pubs")
        toast.success("Publication effectuée")
        
    }
})
function direction(id){
    navigator("/commentaire/"+id)
 }

function liker(id){
    const like={
        user_id : user.id,
        publication_id : id
    }
   mutation.mutate(like)  
 }


   
  return (
        <Stack direction={"row"} gap={10} padding={-10} alignItems={"center"} justifyContent={"center"}>
        <p><a onClick={()=>liker(pub.id)} style={{textDecoration:"none", color:"#646565"}}>< ThumbUpOutlinedIcon sx={{color:"##626263"}}/> Like</a></p>
        <p ><a onClick={()=>direction(pub.id)}  style={{textDecoration:"none", color:"#646565"}}><ModeCommentOutlinedIcon/> commenter</a></p>
        <p style={{color:"#646565"}}><ReplyOutlinedIcon />Partager</p>

        </Stack>
   
  )
}

export default BarLike