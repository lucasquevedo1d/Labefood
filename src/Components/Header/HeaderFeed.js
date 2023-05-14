import {  ContainerCardHeaderFeed, Logo, Title} from "./Styled"
import { ArrowBackIosNew } from "@mui/icons-material"
import { goToBack, goToLogin } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import logo from './img/ifuture.svg'


export const HeaderFeed = ({back}) =>{
    const naviagte = useNavigate()

    const logout = () =>{
        window.localStorage.removeItem("token")
        goToLogin(naviagte)
      }
    return <ContainerCardHeaderFeed>
           {back &&  <ArrowBackIosNew onClick={ () => goToBack(naviagte)} logout={logout}/>} 
           <Logo src={logo} />
        </ContainerCardHeaderFeed>
}