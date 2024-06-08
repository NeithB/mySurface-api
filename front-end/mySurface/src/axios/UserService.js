import axios from "axios";

const REACT_BASE_URL="http://localhost:8080/api/user/";

export const createUser=(user)=>axios.post(REACT_BASE_URL,user);
export const upUser=(id,user)=>axios.put(REACT_BASE_URL+"update/"+id,user);
export const getUsers=()=>axios.get(REACT_BASE_URL+"list");
export const deletUser=(id)=>axios.delete(REACT_BASE_URL+"delete/"+id);
export const byId=(id)=>axios.get(REACT_BASE_URL+"getById/"+id);
export const byLogin=(login)=>axios.get(REACT_BASE_URL+"getByLogin/"+login);
export const connect=(login,mdp)=>axios.post(REACT_BASE_URL+"connexion/"+login+"/"+mdp)




