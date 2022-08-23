import { Buttonlogout, CardLogout, ContainerCardHeader, Title} from "./Styled"
import { ArrowBackIosNew } from "@mui/icons-material"
import { goToBack, goToLogin } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"


export const Header = ({title, back}) =>{
    const naviagte = useNavigate()

    const logout = () =>{
        window.localStorage.removeItem("token")
        goToLogin(naviagte)
      }
    return <ContainerCardHeader>
           {back &&  <ArrowBackIosNew onClick={ () => goToBack(naviagte)}/>} 
           <Title>{title}</Title>
        </ContainerCardHeader>
}

