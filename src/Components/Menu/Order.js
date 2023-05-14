import React from 'react'
import { BoxInform } from '../CardProduct/Styled'
import { ClokedStyled, OrderContainer, OrderContainerSpace, RestaurantName, Title, TotalPrice } from './Styled'


const Order = ({totalPrice, restaurantName}) => {
  return <>
    <OrderContainer>
        <ClokedStyled/>
        <BoxInform>
            <Title>
                Pedido em andamento
            </Title>
            <RestaurantName>{restaurantName}</RestaurantName>
            <TotalPrice>Subtotal {new Intl.NumberFormat('pt-BR', {
          style:'currency',
          currency:'BRL'
        }).format(totalPrice)}</TotalPrice>
        </BoxInform>
    </OrderContainer>
    <OrderContainerSpace/>
  </>
}

export default Order