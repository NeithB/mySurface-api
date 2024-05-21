import React, { useEffect, useState } from 'react'
import Header from '../commun/Header'
import Publication from '../publication/Publication'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { getPub } from '../../axios/PublicationService'
import { useQueryClient,useQuery, useMutation } from '@tanstack/react-query'
import { deletUser } from '../../axios/UserService'
import Contenue from '../publication/Contenue'
import Chargement from '../publication/Chargement'



export default function Interface() {

const queryClient=useQueryClient();

const user=JSON.parse(localStorage.getItem('user'))


const mutation=useMutation({
  mutationFn:(id)=>{
    return deletUser(id)
  },
  onError:(error)=>{
      toast.error("Une erreur est survenue")
  },
  onSuccess:()=>{
      reset()
      queryClient.invalidateQueries("publication")
      toast.success("Publication effectuée")
      
  }
})

const {data:pubs,isLoading,error}=useQuery({ 
      queryKey:['pubs'],
      queryFn:()=>getPub().then((res)=>res.data),      
      onerror:(error)=>console.log(error),
}) 



if(isLoading){
  return  <Chargement/>
}

function supprimer(id){
  mutation.mutate(id)
  console.log(id);
  

}


  return (
    
        <Box bgcolor={"#CBD3E2"}>   
   
                <Header/>
                <Publication/>                               
                      <Box padding={2}  sx={{margin:"auto"}} width={"70%"} >    
                          { pubs.map((pub)=> 
                          <Contenue pub={pub}/>                                                   
                          )}
                      </Box> 
                </Box>     
   
  )
}
