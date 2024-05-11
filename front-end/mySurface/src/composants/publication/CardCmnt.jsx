import React from 'react'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import dayjs from "dayjs";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function CardCmnt({commentaires,pub}) {

  const user=JSON.parse(localStorage.getItem('user'))
  const {id}=useParams()

  console.log(id)


  return (        
    <Stack padding={2}  sx={{margin:"auto"}} width={"50%"} direction={"row"} gap={1}>
    <Box borderRadius={4} width={"100%"} bgcolor={"#F8F8F8"} padding={2} marginBottom={1}> 
                    <Typography variant='h6' textAlign={"center"}>Commentaires</Typography>
                    {                                         
                     commentaires?.map((ctr)=>
                      
                    <Box>
                        <Box className='card' padding={2} marginBottom={1}>
                                                    
              
                            <Stack direction={"row"} gap={1} >
                                <Avatar src=""/> 
                                <Typography variant='p' sx={{fontWeight:"Bold", marginTop:1}}>{ctr.user?.prenom} {ctr.user?.nom}</Typography>
                                <Typography variant="p" sx={{ marginBottom:"15px",marginLeft:5, color:"#90A9B6",marginTop:1}} ><em>{dayjs(pub?.datePub).format("dddd, d MMM YYYY")  }</em></Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="p" className='text-center'>{ctr.contenu}</Typography>
                            </Stack>
                            <Typography variant="p" sx={{ marginBottom:"15px",color:"#90A9B6",marginTop:1}} className='text-center' >

                            ----------------------------------------------------------------------------------------------------
                            </Typography>
                         
                            <Stack direction={"row"} margin={"auto"}>
                              {

                                user.id==ctr.user.id && 
                              <IconButton aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                              }
                              {
                                user.id==ctr.user.id && 
                                <IconButton aria-label="delete">
                                <EditIcon />
                                </IconButton>
                              }
                             
                             

                            </Stack>

                        </Box>
                            
                    </Box>                                       
                    )}
    </Box>
</Stack>      
          
  )
}

export default CardCmnt