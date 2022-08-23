import { useNavigate } from "react-router-dom"
import { goToRestaurants } from "../../Routes/Coordinator"
import { BoxInformeTimePrice, ContainerCardRestaurant, ImageRestaurant, InformeTimePrice, NameRestaurant } from "./Styled"
export const CardRestaurant = ({restaurant}) =>{
    const navigate = useNavigate()
    return <ContainerCardRestaurant onClick={() => goToRestaurants(navigate, restaurant.id)}>
       <ImageRestaurant src={restaurant.logoUrl}/>
       <NameRestaurant>{restaurant.name}</NameRestaurant>
       <BoxInformeTimePrice>
        <InformeTimePrice>Delivery: {restaurant.deliveryTime} min</InformeTimePrice>
        <InformeTimePrice>Envio: {restaurant.shipping} R$</InformeTimePrice>
       </BoxInformeTimePrice>
        </ContainerCardRestaurant>
}

