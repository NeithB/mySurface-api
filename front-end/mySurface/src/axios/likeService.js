import axios from "axios";


const REACT_BASE_URL="http://localhost:8080/api/liker/";
export const  createLike=(like)=>axios.post(REACT_BASE_URL,like);
export const getLike=()=>axios.get(REACT_BASE_URL+"nbreLike");