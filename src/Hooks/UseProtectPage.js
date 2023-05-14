import { useNavigate } from "react-router-dom"
import { goToLogin } from "../Routes/Coordinator"
import { useEffect } from "react"

export const UseProtectPage = () =>{
    const navigate = useNavigate()

    const token = window.localStorage.getItem('token')

    useEffect(() =>{
        if(!token){
            goToLogin(navigate)
        }

    },[])
        
}