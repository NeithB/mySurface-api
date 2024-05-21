import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from 'react-router-dom';

function Page404() {
  return (
        <Stack 
             alignItems={"center"} 
             justifyContent={"center"}
            
             width={"100%"}
             height={"100vh"}
             direction={"column"}
             
             >
             
             <Box> 
                    <Typography variant="h4" sx={{fontFamily:"Arial Black"}}>Erreur 404</Typography>
                    <Typography variant="h4">Page not found</Typography>
                    <Stack  margin={"auto"}  width={"100%"} direction={"column"}>
                     
                        <img src="https://img.freepik.com/vecteurs-libre/illustration-isometrique-erreur-404_23-2148509538.jpg?w=740&t=st=1715515456~exp=1715516056~hmac=8e69894b57df2093bc28d3c2d77f32534d1bd94ed6cf0143d1deb2313a01102a" width={"60%"}/>                
                         <Link to="/interface" className='btn btn-success'style={{width:"20%"}}><HomeIcon/> </Link>
                      
                     
                    </Stack>
                   
             </Box>
             <Box>
              
             </Box>
        </Stack>
  )
}

export default Page404