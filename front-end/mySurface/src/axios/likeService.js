import axios from "axios";


const REACT_BASE_URL="http://localhost:8080/api/liker/";
export const  createLike=(like)=>axios.post(REACT_BASE_URL,like);
export const getLike=()=>axios.get(REACT_BASE_URL);
export const getLikeExist=(idUser,idPub)=>axios.get(REACT_BASE_URL+"find/"+idUser+"/"+idPub);
export const deleteLike=(id)=>axios.delete(REACT_BASE_URL+"delete/"+id);