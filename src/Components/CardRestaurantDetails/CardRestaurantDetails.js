import { useNavigate } from "react-router-dom"
import { goToRestaurants } from "../../Routes/Coordinator"
import { Inform, ContainerCardRestaurant, ImageRestaurant, NameRestaurant } from "./Styled"
export const CardRestaurantDetails = ({restaurant}) =>{
    const navigate = useNavigate()
    return <ContainerCardRestaurant onClick={() => goToRestaurants(navigate, restaurant.id)}>
       <ImageRestaurant src={restaurant.logoUrl}/>
       <NameRestaurant>{restaurant.name}</NameRestaurant>
       <Inform>{restaurant.category}</Inform>
       <Inform>
        <Inform>{restaurant.address}</Inform>
       </Inform>
        </ContainerCardRestaurant>
}

