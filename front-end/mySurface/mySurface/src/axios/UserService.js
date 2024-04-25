import axios from "axios";

const REACT_BASE_URL="http://localhost:8080/api/user/";

export const createUser=(user)=>axios.post(REACT_BASE_URL,user);
export const getUsers=()=>axios.get(REACT_BASE_URL+"list")




