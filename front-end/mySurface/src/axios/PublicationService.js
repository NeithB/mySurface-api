import axios from "axios";


const REACT_BASE_URL="http://localhost:8080/api/publication/";
export const  createPub=(pub)=>axios.post(REACT_BASE_URL,pub);
export const getPub=()=>axios.get(REACT_BASE_URL);