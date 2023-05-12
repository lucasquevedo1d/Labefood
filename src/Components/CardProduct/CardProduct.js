import { useState } from "react"
import { useGlobal } from "../../Global/GlobalStateContext"
import { ModalSelectQuantity } from "../Modal/ModalSelectQuantity"
import { BoxInform, InformPrice,InformButtonRemove, BoxInformePriceButton, BoxNameQuantity, ContainerCardProducts, ImageProduct, InformButton, InformDescrption, NameProduct, QuantityProduct } from "./Styled"

export const CardProduct = ({ product, restaurant}) =>{
    const [showModal, setShowModal] = useState(false)
    const { requests, states } = useGlobal()
    const { addToCart, removeCart} = requests
    const { cart } = states
    const choiceQuantity = (quantity) =>{
        
        setShowModal(false)
        if(addToCart.length > 0){
            return addToCart(product, quantity, restaurant)
        }
    } 

    const productInCart = cart.find((productCart) => productCart.id === product.id)
    return <ContainerCardProducts>
        <ImageProduct src={product.photoUrl}/>
        <BoxInform>
            <BoxNameQuantity>
                <NameProduct>{product.name}</NameProduct>
                {productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>}
            </BoxNameQuantity>
            <InformDescrption>{product.description}</InformDescrption>
            <BoxInformePriceButton>
                
                    <InformPrice>R$ {product.price}</InformPrice>
                    {
                    productInCart?
                    <InformButtonRemove onClick={() => removeCart(product.id)}>
                    Remover
            </InformButtonRemove>
            :
                    <InformButton onClick={()=>setShowModal(true)}>
                        Adicionar
                </InformButton>}
            </BoxInformePriceButton>
            <ModalSelectQuantity open={showModal} setOpen={setShowModal} choiceQuantity={choiceQuantity}/>
        </BoxInform>
    </ContainerCardProducts>
}