import React, { useState } from 'react'
import Header from '../commun/Header'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { getPubID } from '../../axios/PublicationService'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { createCtr, getCtr } from '../../axios/commentaireService'

import toast from 'react-hot-toast'
import CardCmnt from './CardCmnt'

export default function Commentaire() {
   
    const userL=JSON.parse(localStorage.getItem('user'))
  
    

    const {register, handleSubmit,reset,formState: { errors },} = useForm()
    const queryClient=useQueryClient()
    const {id}=useParams();
    

    const {data:pub,isLoading,error}=useQuery({ 
        queryKey:['pub'],
        queryFn:()=>getPubID(id).then((res)=>res.data),      
        onerror:(error)=>console.log("Une erreur est survenue"+error),
  })

  const {data:commentaires}=useQuery({ 
    queryKey:['commentaires'],
    queryFn:()=>getCtr(id)?.then((res)=>res.data),      
    onerror:(error)=>console.log("Une erreur est survenue"+error),
})




  const mutation=useMutation({
    mutationFn:(ctr)=>{
        return createCtr(ctr)
    },
    onError:(error)=>{
        toast.error("Une erreur est survenue")
    },
    onSuccess:()=>{
        reset()
        queryClient.invalidateQueries("commentaires")
        toast.success("Commentaire effectué")
        
    }
})

  const onSubmit= (data) => {
    const cmtr={
        ...data,
        idUser:userL.id,
        idPub:pub.id
    }     
    mutation.mutate(cmtr)   
  }




  return (
            <Box bgcolor={"#CBD3E2"}>    
            <Header/>
                    <Stack padding={2}  sx={{margin:"auto"}} width={"50%"} direction={"row"} gap={1}>       
                             <Box borderRadius={4} width={"100%"} bgcolor={"#F8F8F8"} padding={2}>               
                                <hr className=''/>                                 
                                <img src={pub?.url} width={"100%"}/>
                                <hr />
                             </Box>
                             <Box borderRadius={4} width={"100%"} bgcolor={"#F8F8F8"} padding={6}>
                                    
                               <form onSubmit={handleSubmit(onSubmit)} >
                    
                                        <TextField id="outlined-basic" 
                                        label="Votre commentaire" 
                                        variant="outlined"
                                        fullWidth
                                        type='text'
                                        multiline
                                            rows={4}
                                        size='small'
                                        sx={{marginBottom:"10px"}}
                                        {...register("contenu",{
                                            required:"Veillez saiser quelques mots",
                                            minLength:{value:"5",message:"Veillez saisir au moins 5 caracters"}
                                        })}
                                        />                
                                        <Button className='mt-3' variant="contained" type="submit" fullWidth>Publier</Button>
                                </form>   
                             </Box>
                            
                    </Stack>
                    <CardCmnt commentaires={commentaires} pub={pub}/>      
            </Box>   
  )
}
