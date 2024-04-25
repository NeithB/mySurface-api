import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
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
        <Stack width={"100%"} height={"100vh"} backgroundColor={"#f5f5f5"}>
            <Box width={500} backgroundColor={"#fff"} >
              {
                users.map(u=> <h1>bonjour</h1>)
              }




            </Box>
            <Box width={500} backgroundColor={"#fff"}>


            </Box>


        </Stack>




    </div>
  )
}
