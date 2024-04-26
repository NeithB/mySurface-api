import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { deletUser, getUsers } from '../axios/UserService'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import toast from 'react-hot-toast';
import Person3Icon from '@mui/icons-material/Person3';

export default function Dashboard() {

    const [users, setUsers]=useState([])

    function getAllUsers(){
        getUsers().then((response)=>{
            setUsers(response.data)
        }).catch((error)=>{
            toast.error("erreur survenue")
        })        
    }

  

    useEffect(()=>{
        getAllUsers();
    },[])

    function deleteUser(id){
        deletUser(id).then((res)=>{
          getAllUsers();
          toast.success("Success delete")
        }).catch(error=>{
          toast.error("Une erreur est survenue")
        })
    }


  return (
    <div>
        <Stack width={"100%"} height={"100vh"} backgroundColor={"#f5f5f5"} padding={"40px"} direction={'row'} gap={4}>
              <Typography variant='h3'>Dashboar</Typography>
            <Box width={1000} backgroundColor={"#fff"} >
               
              <TableContainer component={Paper}>
                    <Table sx={{ }} aria-label="simple table">
                        <TableHead>
                        <TableRow className='bg-primary'>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Nom</TableCell>
                            <TableCell align="right">Prenom</TableCell>
                            <TableCell align="right">Login</TableCell>                           
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {users.map(u => 
                            <TableRow
                            key={u.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row"> {u.id} </TableCell>
                            <TableCell align="right">{u.nom}</TableCell>
                            <TableCell align="right">{u.prenom}</TableCell>
                            <TableCell align="right">{u.login}</TableCell>                           
                            <TableCell align="right">
                                
                                <EditIcon className='text-primary' onClick={()=>upUser(u.id)} />
                                <DeleteIcon className='text-danger' onClick={()=>deleteUser(u.id)} />
                      
                            </TableCell>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                    </TableContainer>


              
            </Box>
            <Box width={500} backgroundColor={"#fff"}>

            <Card sx={{ minWidth: 275 }} className='bg-secondary text-white'>
              <CardContent>
                <Typography variant="h5" color="text.secondary" className='text-center text-white'> Users</Typography>
                <p className='mt-3 text-center'><em>Number of Users: {users.length}</em> </p>
                
                <p className='text-center'> 
                  <Person3Icon sx={{fontSize:'50px'}} />
                </p>
              </CardContent>
              <CardActions>
                <Button size="small" className='text-white'>Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 275,marginTop:'10px' }} className='bg-secondary text-white'>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className='text-white'>Learn More</Button>
              </CardActions>
            </Card>


            </Box>


        </Stack>




    </div>
  )
}
