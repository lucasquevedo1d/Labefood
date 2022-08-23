
import { goToCart, goToFeed, goToProfile } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { ContainerCardFooter } from "./Styled";
export const Footer = () =>{
    const naviagte = useNavigate()
    return <ContainerCardFooter>
             <HomeIcon onClick={ () => goToFeed(naviagte)}/>
             <AddShoppingCartIcon onClick={() => goToCart(naviagte)}/>
             <PersonIcon onClick={() => goToProfile(naviagte)}/>   
        </ContainerCardFooter>
}

