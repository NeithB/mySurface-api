import React, { useEffect, useState } from 'react'
import Header from '../commun/Header'
import Publication from '../publication/Publication'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { getPub } from '../../axios/PublicationService'
import { useQueryClient,useQuery, useMutation } from '@tanstack/react-query'
import { deletUser } from '../../axios/UserService'
import EditIcon from '@mui/icons-material/Edit';
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
                  <Stack direction={'row'} gap={1} >
                    <Stack width={"35%"}>
                          <Box  
                                bgcolor={"#F8F8F8"}
                                marginLeft={"100px"}
                                marginTop={"20px"}
                                height={"50vh"}
                                alignItems={"center"}                       
                                padding={"10px"}
                                borderRadius={4}>


                              <p style={{margin:'auto', color:'#3C5D85'}} className='text-center'>Profil</p>     
                              <hr />
                              <div>
                                <Avatar src="" style={{margin:"auto"}}/>
                                <p className='mt-3 fw-bold' style={{backgroundColor:"#56D661", borderRadius:"6px",width:"45%",padding:"4px",margin:"auto"}} >{user.prenom} {user.nom}</p>
                              </div>
                               
                              <p className="text-end">
                                <em>
                                <EditIcon className='text-primary' />
                                </em>
                              </p>
                              <p style={{margin:'0.5px', color:'#3C5D85'}} >Birthay : </p>  
                              <p style={{margin:'0.5px',color:'#3C5D85'}}>contact :</p>
                              <p style={{margin:'0.5px',color:'#3C5D85'}}>email:</p>
                              <p style={{margin:'0.5px',color:'#3C5D85'}}>Pays:</p>
                              <p style={{margin:'0.5px',color:'#3C5D85'}}>Ville:</p>
                              
                          </Box>
                          <Box  
                                bgcolor={"#F8F8F8"}
                                marginLeft={"100px"}
                                marginTop={"20px"}
                                height={"50vh"}
                                alignItems={"center"}                       
                                padding={"10px"}
                                borderRadius={4}>
                                <Box>
                                  <p style={{margin:'auto', color:'#3C5D85'}} className='text-center'>Block</p>                     
                                </Box>
                                <hr /> 
                                <Stack direction={'row'} gap={1}>
                                  <p style={{width:"50%"}}><img src="https://upload.wikimedia.org/wikipedia/fr/2/26/Logo_BFMTV_2017.svg" width={"100%"}  /></p>
                                  <p style={{fontSize:"10px",color:"#3D538E"}}>BFM TV est une chaîne de télévision française d'information nationale en continu, privée,
                                     faisant partie de la filiale Altice Média du groupe Altice France. </p>
                                </Stack>
                                <Stack direction={'row'} gap={1}>
                                  <p style={{width:"50%"}}><img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Coat_of_arms_of_the_Republic_of_the_Congo.svg" width={"100%"}  /></p>
                                  <p style={{fontSize:"10px",color:"#3D538E"}}>Le Congo, en forme longue la République du Congo, est un pays d'Afrique centrale, situé de part et d'autre
                                   de l'équateur. Ses voisins sont : le Gabon à ... </p>
                                </Stack>
                                <hr />
                          </Box>
                      </Stack>
                    <Box>
                        <Publication/>                               
                        <Box padding={2}  sx={{margin:"auto"}} width={"90%"} >    
                            { pubs?.map((pub)=> 
                            <Contenue key={pub.id} pub={pub}/>                                                   
                            )}
                        </Box> 
                    </Box>
                    <Box width={"30%"} 
                        bgcolor={"#F8F8F8"}
                        marginRight={"100px"}
                        marginTop={"70px"}
                        height={"80vh"}
                        alignItems={"center"}                       
                        padding={"20px"}
                        borderRadius={4}>
                       <Box>
                        <p style={{margin:'auto', color:'#3C5D85'}} className='text-center'>Informations</p>                     
                      </Box>
                      <hr />   
                      <img src="https://img.freepik.com/photos-premium/illustration-vectorielle-dynamique-cristiano-ronaldo_812426-134538.jpg?w=740" width={"100%"}/>
                      <Typography variant='h6' className='text-center'>Cr7 the best player</Typography>
                      <p style={{fontSize:"10px", color:"#3C4661"}}>
                        Ronaldo has also worked hard at striking the ball in a unique way, 
                        whether with the inside or outside of his cleat, so that each time it leaves
                         his foot with more of a wobble than a swerve. 
                      </p>
                    </Box>
                    
                  </Stack>
          </Box> 
           
   
  )
}
