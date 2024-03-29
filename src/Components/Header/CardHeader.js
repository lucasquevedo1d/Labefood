import {  ContainerCardHeader, Logo } from "./Styled"
import { ArrowBackIosNew } from "@mui/icons-material"
import { goToBack, goToLogin } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import logo from './img/ifuture.svg'


export const Header = ({Title, back}) =>{
    const naviagte = useNavigate()

    const logout = () =>{
        window.localStorage.removeItem("token")
        goToLogin(naviagte)
      }
    return <ContainerCardHeader>
           {back &&  <ArrowBackIosNew onClick={ () => goToBack(naviagte)} logout={logout}/>} 
           <Logo src={logo} />
        </ContainerCardHeader>
}

