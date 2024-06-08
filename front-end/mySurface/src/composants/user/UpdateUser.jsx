import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { byId, byLogin, createUser, upUser } from '../../axios/UserService';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { SystemUpdateOutlined } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';


export default function updateUser() {

const {register,handleSubmit,watch,formState: { errors }}=useForm();

const navigator=useNavigate();

 const {id}=useParams();

const {data:use}=useQuery({ 
    queryKey:['use'],
    queryFn:()=>byId(id)?.then((res)=>res.data),      
    onerror:(error)=>console.log("Une erreur est survenue"+error),
  })
  
const idUser=use?.id;
  
const onSubmit=(data)=>{
     upUser(idUser,data).then((res)=>{
        console.log(res,errors) 
        navigator("/dashboard")
        toast.success("Update with success")
     }).catch((error)=>{
        toast.error("une erreur est survenue")
      }) 
             
}



  return (
    <div>
      <Stack alignItems={"center"}
             justifyContent={"center"}
             width={"100%"}
             height={"100vh"}
             backgroundColor={"#f0f0f0"}>

            <Box width={500}
                sx={{
                  backgroundColor:"#fff",
                  padding:3}}>
              <Typography variant='h5'>Update User</Typography>
              <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:"10px"}}>
                    <Stack direction={'column'} gap={1}>
                      <TextField
                        id="outlined-basic" 
                        label={use?.nom}
                        variant="outlined"
                        placeholder='Enter your name'
                        size='small'
                        {...register("nom",{
                          require:"rquired first name",
                          minLength:{value:2,message:"minimum 2 letters"}
                        })}
                        fullWidth                    
                      />
                       <TextField
                        id="outlined-basic" 
                        label={use?.prenom}
                        variant="outlined"
                        size='small'
                        placeholder='Enter your firstname'
                        {...register("prenom",{
                          require:"rquired first name",
                          minLength:{value:2,message:"minimum 2 letters"}
                        })}
                        fullWidth                    
                       />
                      <Button variant="contained" type="submit">Modifier</Button>


                    </Stack>


              </form>

            </Box>


      </Stack>



    </div>
  )
}
