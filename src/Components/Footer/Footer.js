import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { goToCart, goToFeed, goToProfile } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ContainerCardFooter } from "./Styled";
export const Footer = () =>{
    const naviagte = useNavigate()
    return <ContainerCardFooter>
             <HomeOutlinedIcon onClick={ () => goToFeed(naviagte)}>Inicio</HomeOutlinedIcon>
             <ShoppingCartOutlinedIcon onClick={() => goToCart(naviagte)}/>
             <PersonOutlineOutlinedIcon onClick={() => goToProfile(naviagte)}/>   
        </ContainerCardFooter>
}

