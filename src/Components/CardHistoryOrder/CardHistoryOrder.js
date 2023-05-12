import React from 'react'
import { HistoryOrder } from './styled'

const CardHistoryOrder = (props) => {
  return (
    <HistoryOrder>
        <h4>{props.restaurantName}</h4>
        <p>Data da entrega</p>
        <p>Subtotal: R${props.totalPrice},00</p>
    </HistoryOrder>
  )
}

export default CardHistoryOrder