import axios from "axios";


const REACT_BASE_URL="http://localhost:8080/api/publication/";
export const  createPub=(pub)=>axios.get(REACT_BASE_URL,pub);