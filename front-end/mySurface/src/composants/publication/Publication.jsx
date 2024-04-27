import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { createPub } from '../../axios/PublicationService'


export default function Publication() {

    const {register, handleSubmit,reset,formState: { errors },} = useForm()
    const user=JSON.parse(localStorage.getItem('user'))

    const onSubmit= (data) => {
        const publication={
            ...data,
            user:user.id,
            nbreLike:0
        }
        createPub().then((res)=>{
                    console.log(res.data)
        })

    }

  return ( 
    <Box bgcolor={"#D5DEEC"} width={"100%"} height={"100vh"}>
            <Typography variant='h4'>Share your day</Typography>
        <Stack bgcolor={"#F8F8F9"} width={"60%"} alignItems={"center"} margin={"auto"} padding={"10px"}>
            <Box width={"100%"} borderRadius={30} >
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
                    />
                    <Button className='mt-3' variant="contained" type="submit" fullWidth>Publier</Button>


                </form>

            </Box>

        </Stack>     
    </Box>  





   
  )
}
