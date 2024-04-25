import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { getUsers } from '../axios/UserService'

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


  return (
    <div>
        <Stack width={"100%"} height={"100vh"} backgroundColor={"#f5f5f5"} padding={"40px"}>
              <Typography variant='h3'>Dashboar</Typography>
            <Box width={700} backgroundColor={"#fff"} >

              <TableContainer component={Paper}>
                    <Table sx={{ }} aria-label="simple table">
                        <TableHead>
                        <TableRow className='bg-secondary'>
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
                                <Button variant="outlined" sx={{marginRight:1}} onClick={()=>deleteUser(u.id)}>
                                 Delete
                                </Button>
                                <Button variant="contained" color="primary" onClick={()=>updateUser(u.id)}>
                                Update
                                </Button>
                            
                            </TableCell>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                    </TableContainer>


              
            </Box>
            <Box width={500} backgroundColor={"#fff"}>
            </Box>


        </Stack>




    </div>
  )
}
