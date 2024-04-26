

export const saveToken=(token)=>{
    localStorage.setItem('token',token)
}

export const logout=()=>{
    localStorage.removeItem('token')
}

export const isLogged=()=>{
    const token=localStorage.getItem('token');
    return !!token
}

