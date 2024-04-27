import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { createPub } from '../../axios/PublicationService'
import Contenue from './Contenue'
import toast from 'react-hot-toast'


export default function Publication() {

    const {register, handleSubmit,reset,formState: { errors },} = useForm()
    const userL=JSON.parse(localStorage.getItem('user'))

    const onSubmit= (data) => {
        const publication={
            ...data,
            user:userL,
            nbreLike:0
        }
        console.log(publication)
        createPub(publication).then((res)=>{
                    toast.success("Plubier avec succes")
                    reset()
        }).catch((error)=>{
            console.log(errors)
            toast.error("Une erreur est survenue lors de la publication")
            
        })

    }

  return ( 
    <Box bgcolor={"#D5DEEC"} width={"100%"} height={"100vh"}>
            <Typography variant='h4'>Share your day</Typography>
        <Stack  
                width={"60%"} 
                alignItems={"center"} 
                margin={"auto"} 
                padding={"10px"}
                direction={"column"}
                gap={5}
                >
            <Box width={"100%"} bgcolor={"#F1F1F1"} padding={2} >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <TextField id="outlined-basic" 
                    label="Parlez de votre journée" 
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
                    <Button className='mt-3' variant="contained" type="submit" fullWidth>Publier</Button>
                </form>
            </Box>
            <Box width={"100%"}>
                    <Contenue/>
            </Box>

        </Stack>     
    </Box>  





   
  )
}
