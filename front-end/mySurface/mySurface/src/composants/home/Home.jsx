import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { blue } from '@mui/material/colors'

export default function Home() {

const navigator=useNavigate();

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

                 <form style={{marginTop:"10px"}} >
                    <Stack direction={'column'} gap={1}>                         
                        <TextField 
                        id="outlined-basic" 
                        variant="outlined"
                        placeholder='email or phone'
                        fullWidth />

                        <TextField 
                        id="outlined-basic"                   
                        variant="outlined"
                        type="password"
                        placeholder='Password'
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
