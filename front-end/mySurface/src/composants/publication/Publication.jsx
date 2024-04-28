import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { createPub } from '../../axios/PublicationService'
import Contenue from './Contenue'
import toast from 'react-hot-toast'
import { getPub } from '../../axios/PublicationService'


export default function Publication() {

    const {register, handleSubmit,reset,formState: { errors },} = useForm()
    const [pubs, setPubs]=useState([]) 
    const userL=JSON.parse(localStorage.getItem('user'))
    
useEffect(()=>{
    getPub().then((res)=>{
        setPubs(res.data)
    })
    
},[])


   
    const onSubmit= (data) => {
        const publication={
            ...data,
            user_id:userL.id,
            nbreLike:0
        }
        console.log(publication)
        createPub(publication).then((res)=>{
                    toast.success("Plubier avec succes")
                    reset()
        }).catch(error=>{
            console.log(errors)
            toast.error("Une erreur est survenue lors de la publication")
            
        })

    }

  return ( 
    <Box>
        <Box height={"100vh"} >
               
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
                        {pubs.length>0 &&                           
                            pubs.map(pub=>  
                                <>                                                      
                                 <Contenue p={pub}/>
                                </> 
                         )}

            </Stack>     
        </Box>
    </Box>  





   
  )
}
