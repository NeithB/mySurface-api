import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { createPub } from '../../axios/PublicationService'
import toast from 'react-hot-toast'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { isLogged } from '../../connexionServices/connexionService'
import { useNavigate } from 'react-router-dom'

export default function Publication() {

    const {register, handleSubmit,reset,formState: { errors },} = useForm()
    const userL=JSON.parse(localStorage.getItem('user'))

    const navigator=useNavigate()

if(userL==null){
    navigator("/")
}

const useQuery=useQueryClient()

const mutation=useMutation({
    mutationFn:(pub)=>{
        return createPub(pub)
    },
    onError:(error)=>{
        toast.error("Une erreur est survenue")
    },
    onSuccess:()=>{
        reset()
        useQuery.invalidateQueries("pubs")
        toast.success("Publication effectuée")
        
    }
})

    const onSubmit= (data) => {
        const publication={
            ...data,
            user_id:userL.id,
            nbreLike:0
        }
       mutation.mutate(publication)

    }

    

  return (             
            <Stack  
                    width={"90%"} 
                    alignItems={"center"} 
                    margin={"auto"} 
                    padding={"10px"}
                    direction={"column"}
                    gap={5}
                    
                    >                
                <Box width={"100%"} bgcolor={"#F8F8F8"} padding={2} >
                    <form onSubmit={handleSubmit(onSubmit)} >
                
                        <TextField id="outlined-basic" 
                        label="Parlez de votre journée" 
                        variant="outlined"
                        fullWidth
                        type='text'
                        multiline
                            rows={2}
                        size='small'                       
                        sx={{marginBottom:"10px"}}
                        {...register("message",{
                            required:"Veillez saiser quelques mots",
                            minLength:{value:"5",message:"Veillez saisir au moins 5 caracters"}
                        })}
                        
                        />
                        <TextField id="outlined-basic" 
                        label="url de l'image" 
                        variant="outlined"
                        fullWidth
                        type='text'               
                        size='small'
                        sx={{marginBottom:"10px"}}
                        {...register("url",{
                            required:"Veillez saiser quelques mots",
                            minLength:{value:"2",message:"Veillez saisir au moins 2 caracters"}
                        })}
                        />
                        <Button className='mt-1' variant="contained" type="submit" fullWidth>Publier</Button>
                    </form>
                </Box> 
                        
            </Stack>     
      





   
  )
}
