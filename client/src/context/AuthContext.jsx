import {createContext, useState, useCallback, useEffect} from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [registerInfo, setRegisterInfo] = useState({
        name:"",
        email:"",
        password:""
    })

    useEffect(()=>{
        const user = localStorage.getItem('User')
        setUser(JSON.parse(user))
    },[])


    //Done for optimization 
    const updateRegisterInfo = useCallback((info) =>{
        setRegisterInfo(info)
    },[])

    return <AuthContext.Provider value={{registerInfo, updateRegisterInfo}}>
        {children}
    </AuthContext.Provider>
}