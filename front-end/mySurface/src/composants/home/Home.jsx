import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { connect } from '../../axios/UserService';
import toast from 'react-hot-toast';
import { saveToken } from '../../connexionServices/connexionService';





export default function Home() {

const {register, handleSubmit,formState: { errors }} = useForm();
const navigator=useNavigate();

const onSubmit=(data)=>{

    connect(data.login,data.mdp).then((res)=>{
      
        if(res.data){                
            saveToken(res.data)  
            navigator("/interface")                   
            toast.success("You are connected")

        }else{
            toast.error("Login Or Password not found")
        }
       
    }).catch((error)=>{
        console.log(errors)
        
    })

}




function signUp(){
     
       navigator("/logon")
        
}

  return (
    <div>
        <Stack alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height={"100vh"}
            backgroundColor={"#F0F2F2 "} 
            direction={'row'}
            gap={1}>

            <Box width={500}>

            <Typography variant='h2' color={"#218DA0 "}>mySurface</Typography>
            <Typography variant='h6'>Partgez votre quotidien avec vos proches</Typography>
                <Link className='btn btn-primary' to="/dashboard"> Dashboard</Link>
                

            </Box>

            <Box width={500}
            sx={{
                backgroundColor:"#FFFFFF ",
                padding:3}}>

                 <form style={{marginTop:"10px"}} onSubmit={handleSubmit(onSubmit)} >
                    <Stack direction={'column'} gap={1}>                         
                        <TextField 
                        id="" 
                        variant="outlined"
                        placeholder='email or phone'
                        {...register("login",{
                            require :"Login required",
                            minLength:{value:"2", Message:"Minimum 6 caracteres"},
                             
                        }
                        )}
                        fullWidth />

                        <TextField 
                        id=""                   
                        variant="outlined"
                        type="password"
                        placeholder='Password'
                        {...register("mdp",{
                            require :"password required",
                            minLength:{value:"6", Message:"Minimum 6 caracteres"},
                            maxLength:{value:"8",Message:"maximun 8 caracteres"}  
                        }
                        )}
                        fullWidth />                       
                        <Button variant="contained" type="submit">Sign In</Button>
                </Stack>
                 </form>
                    <Link className='text-center text-primary' 
                        style={{marginTop:"5px",fontSize:"12px", textDecoration:"none"}}
                        to="/update">
                            forgot password?
                    </Link>
                 <hr />
                 <Button variant="contained" 
                 onClick={signUp}
                 color='success' 
                 sx={{marginTop:"10px"}} 
                 fullWidth>
                    Sign Up</Button>
            </Box>
          

        </Stack>

        
    </div>
  )
}
