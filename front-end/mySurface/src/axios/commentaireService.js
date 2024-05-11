import axios from "axios";


const REACT_BASE_URL="http://localhost:8080/api/commentaire/";
export const  createCtr=(commentaire)=>axios.post(REACT_BASE_URL,commentaire);
export const getCtr=(id)=>axios.get(REACT_BASE_URL+"pub/"+id);