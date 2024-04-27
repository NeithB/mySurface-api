

export const saveToken=(value)=>{
    localStorage.setItem('user',JSON.stringify(value))
}

export const logout=()=>{
    localStorage.removeItem('user')
}

export const isLogged=()=>{
    const token=localStorage.getItem('user');
    return !!token
}

