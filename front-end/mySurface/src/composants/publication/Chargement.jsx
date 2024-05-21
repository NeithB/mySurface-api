import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';

function Chargement() {
  return (
        <Stack 
             alignItems={"center"} 
             justifyContent={"center"}
             width={"100%"}
             height={"100vh"}
             bgcolor={"#F5F5F5"}
             >
             
             <Box> 
                    <Typography variant="h4">Loading - Page</Typography>
                    <Stack>
                        <LoadingButton loading variant="outlined">
                            Submit
                        </LoadingButton>

                    </Stack>
                    

             </Box>
        </Stack>
  )
}

export default Chargement