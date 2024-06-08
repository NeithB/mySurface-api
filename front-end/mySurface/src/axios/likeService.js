import axios from "axios";


const REACT_BASE_URL="http://localhost:8080/api/liker/";
export const  createLike=(like)=>axios.post(REACT_BASE_URL,like);
export const getLike=()=>axios.get(REACT_BASE_URL);
export const getExitLike=(idUser,idPub)=>axios.get(REACT_BASE_URL+"find/"+idUser+"/"+idPub);
export const deleteLike=(idUser,idPub)=>axios.delete(REACT_BASE_URL+"delete/"+idUser+"/"+idPub);