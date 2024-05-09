import React, { useState } from 'react'
import Header from '../commun/Header'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { getPubID } from '../../axios/PublicationService'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export default function Commentaire() {
   
    const {register, handleSubmit,reset,formState: { errors },} = useForm()
    const queryClient=useQueryClient()
    const {id}=useParams();


    const {data:pub,isLoading,error}=useQuery({ 
        queryKey:['pub'],
        queryFn:()=>getPubID(id).then((res)=>res.data),      
        onerror:(error)=>console.log(error),
  })

  const onSubmit= () => {}




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
                                        {...register("message",{
                                            required:"Veillez saiser quelques mots",
                                            minLength:{value:"5",message:"Veillez saisir au moins 5 caracters"}
                                        })}
                                        />                
                                        <Button className='mt-3' variant="contained" type="submit" fullWidth>Publier</Button>
                                </form>   
                             </Box>
                            
                    </Stack>
                    <Stack padding={2}  sx={{margin:"auto"}} width={"50%"} direction={"row"} gap={1}>
                        <Box borderRadius={4} width={"100%"} bgcolor={"#F8F8F8"} padding={2} marginBottom={1}> 
                                        <Typography variant='h6' textAlign={"center"}>Commentaires</Typography>
                        </Box>
                    </Stack>         
            </Box>   
  )
}
