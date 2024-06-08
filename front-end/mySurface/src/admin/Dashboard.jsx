import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { deletUser, getUsers } from '../axios/UserService'
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DashboardIcon from '@mui/icons-material/Dashboard';
import toast from 'react-hot-toast';
import Person3Icon from '@mui/icons-material/Person3';
import { isLogged } from '../connexionServices/connexionService';
import { Link, useNavigate } from 'react-router-dom';
import { getPub } from '../axios/PublicationService';
import { getLike } from '../axios/likeService';
import { getCtrs } from '../axios/commentaireService';

export default function Dashboard() {

    const [users, setUsers]=useState([])
    const [pubs, setPubs]=useState([])
    const [likes, setLike]=useState([])
    const [ctrs, setCtrs]=useState([])

    const navigator=useNavigate()

    function getAllUsers(){
        getUsers().then((response)=>{
            setUsers(response.data)
        }).catch((error)=>{
            toast.error("erreur survenue")
        })        
    }
    function getAllPubs(){
      getPub().then((response)=>{
          setPubs(response.data)
          console.log("nb likes "+response.data.length)
      }).catch((error)=>{
          toast.error("erreur survenue")
      })        
  }
    function getAllLikes(){
      getLike().then((response)=>{
          setLike(response.data)
      }).catch((error)=>{
          toast.error("erreur survenue")
      })        
  }
  function getAllCtrs(){
    getCtrs().then((response)=>{
        setCtrs(response.data)
        console.log("nb likes "+response.data.length)
    }).catch((error)=>{
        toast.error("erreur survenue")
    })        
}
    
function deleteUser(id){
        deletUser(id).then((res)=>{
          getAllUsers();
          toast.success("Success delete")
        }).catch(error=>{
          toast.error("Une erreur est survenue")
        })
    }
    function upUser(id){
      navigator("/upUser/"+id)
  }
  function home(){
    navigator("/")
  }

    useEffect(()=>{
      getAllUsers();
      getAllPubs();
      getAllLikes();
      getAllCtrs();

      if(!isLogged()){
        navigator("/")
      }
  },[])


  return (
    <div style={{backgroundColor: "#CBCDD3  ", height:"100vh"}}>
             <Typography variant='h3' color={"#7A8DFF "}><DashboardIcon fontSize='large'/>
                   Dashboar 
                   <Link to={"/interface"} className='m-5'>
                      <HomeIcon className='text-light' fontSize='large'/>
                   </Link> 
            </Typography>
             
              <hr  />
        <Stack width={"100%"}  padding={"40px"} direction={'row'} gap={4}>

            <Box width={'60%'} backgroundColor={"#ffff"} padding={8} >            
              <TableContainer component={Paper}>
                    <Table sx={{ }} aria-label="simple table">
                        <TableHead>
                          <TableRow sx={{backgroundColor:"#AEBAFE "}}>
                              <TableCell>ID</TableCell>
                              <TableCell sx={{fontWeight:"bold", color:"#38393A"}} align="right">Nom</TableCell>
                              <TableCell sx={{fontWeight:"bold", color:"#38393A"}} align="right">Prenom</TableCell>
                              <TableCell sx={{fontWeight:"bold", color:"#38393A"}} align="right">Login</TableCell>                           
                              <TableCell sx={{fontWeight:"bold", color:"#38393A"}} align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody >
                        {users.map(u => 
                            <TableRow
                            key={u.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}                         
                            >
                            <TableCell sx={{color:"#4F4F50"}} component="th" scope="row"> {u.id} </TableCell>
                            <TableCell sx={{color:"#4F4F50"}} align="right">{u.nom}</TableCell>
                            <TableCell sx={{color:"#4F4F50"}} align="right">{u.prenom}</TableCell>
                            <TableCell sx={{color:"#4F4F50"}} align="right">{u.login}</TableCell> 
                              <TableCell align="right">                               
                                  <SettingsIcon className='text-danger' onClick={()=>upUser(u.id)} />
                                  <DeleteIcon className='text-primary' onClick={()=>deleteUser(u.id)} />                     
                              </TableCell>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                    </TableContainer>            
            </Box>
            <Box width={'40%'} className="row" padding={2} gap={4}>

                    <Card sx={{ width:"40%", height:"30vh" }}  className='text-black col-6 col-sm-3'>

                      <CardContent>
                        <Typography variant="h6" color="text.secondary" className='text-center'> Users</Typography>
                        <p className='mt-3  text-center text-primary' >{users.length}</p>                       
                        <p className='text-center'> 
                          <Person3Icon sx={{fontSize:'50px', color:"#F14024"}} />
                        </p>
                      </CardContent>
                      <CardActions>
                        <Button size="small" className='text-white'>Learn More</Button>
                       </CardActions>

                  </Card>
                      <Card sx={{ width:"40%", height:"30vh" }}  className='text-black col-6 col-sm-3'>
                          <CardContent>
                            <Typography variant="h6" color="text.secondary" className='text-center'> Publication</Typography>
                            <p className='mt-3 text-center text-primary'>{pubs.length}</p>                       
                            <p className='text-center'> 
                              <AutoStoriesIcon sx={{fontSize:'50px', color:"#F14024"}} />
                            </p>
                          </CardContent>
                          <CardActions>
                            <Button size="small" className='text-white'>Learn More</Button>
                          </CardActions>
                      </Card>

                  <Card sx={{ width:"40%", height:"30vh" }}  className='text-black col-6 col-sm-3'>
                      <CardContent>
                        <Typography variant="h6" color="text.secondary" className='text-center'> Like</Typography>
                        <p className='mt-3 text-center text-primary'>{likes.length}</p>
             
                        <p className='text-center'> 
                          <FavoriteBorderIcon sx={{fontSize:'50px', color:"#F14024"}} />
                        </p>
                      </CardContent>
                      <CardActions>
                        <Button size="small" className='text-white'>Learn More</Button>
                       </CardActions>

                  </Card>
                  <Card sx={{ width:"40%", height:"30vh" }}  className='text-black col-6 col-sm-3'>

                      <CardContent>
                        <Typography variant="h6" color="text.secondary" className='text-center'> Commentaires</Typography>
                        <p className='mt-3 text-center text-primary'>{ctrs.length}</p>                       
                        <p className='text-center'> 
                          <CreateIcon sx={{fontSize:'50px', color:"#F14024"}} />
                        </p>
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
