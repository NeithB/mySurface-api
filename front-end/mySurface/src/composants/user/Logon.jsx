import React, { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { byLogin, createUser } from '../../axios/UserService';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SystemUpdateOutlined } from '@mui/icons-material';


export default function Logon() {

const {register,handleSubmit,watch,formState: { errors }}=useForm();
 const navigator=useNavigate();

const onSubmit=(data)=>{

        byLogin(data.login).then((res)=>{
          console.log(res.data.login)
          if(res.data.login!=data.login){
            createUser(data).then((res)=>{
              console.log(res,errors) 
              navigator("/")
              toast.success("Succes sign up")    
            }).catch((error)=>{
              toast.error("une erreur est survenue")
            })
          }else{
            toast.error("Ce compte existe déja ")         

          }
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
              <Typography variant='h5'>Sign Up</Typography>
              <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:"10px"}}>
                    <Stack direction={'column'} gap={1}>
                      <TextField
                        id="outlined-basic" 
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
                        variant="outlined"
                        size='small'
                        placeholder='Enter your firstname'
                        {...register("prenom",{
                          require:"rquired first name",
                          minLength:{value:2,message:"minimum 2 letters"}
                        })}
                        fullWidth                    
                       />

                        <TextField
                        id="outlined-basic" 
                        variant="outlined"
                        size='small'
                        placeholder='Enter your login email/phone'
                        {...register("login",{
                          require:"required loin",
                          minLength:{value:6, message:"minimun 6 letters"}
                        })}
                        fullWidth                    
                       />

                        <TextField
                        id="outlined-basic" 
                        variant="outlined" size='small'
                        placeholder='Enter your passeword'
                        {...register("mdp",{
                          require:"required password",
                          minLength:{value:6, message:"minimum 5 letters"},
                          maxLength:{value:8, message:"maximum 8 letters"}
                        })}
                        fullWidth                    
                       />
                         <Typography variant='p' fontSize={"10px"}>
                            Les personnes qui utilisent notre service ont pu 
                            importer vos coordonnées sur Facebook. <a href="">En savoir plus.</a> <br/><br/>
                            En cliquant sur S’inscrire, vous acceptez nos <a href="">Conditions générales.</a>  
                            Découvrez comment nous recueillons, utilisons et partageons vos données 
                            en lisant notre Politique de confidentialité et comment nous utilisons 
                            les cookies et autres technologies similaires en consultant notre Politique 
                            d’utilisation des cookies. Vous recevrez peut-être des notifications par texto de notre part
                            et vous pouvez à tout moment vous désabonner.
                          </Typography>
                      <Button variant="contained" type="submit">Sign Up</Button>


                    </Stack>


              </form>

            </Box>


      </Stack>



    </div>
  )
}
