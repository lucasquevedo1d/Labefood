import React from 'react'
import { HistoryOrder, TitleCard } from './styled'

const CardHistoryOrder = (props) => {

  const convertDate = (timeStamp) =>{
    let time = new Date(timeStamp)
    let day = time.getDate().toString().padStart(2,'0')
    let month = (time.getMonth() +1).toString().padStart(2,'0')
    let year = time.getFullYear()
    return `${day}/${month}/${year}`
  }
  return (
    <HistoryOrder>
        <TitleCard>{props.restaurantName}</TitleCard>
        <p>{convertDate(props.createdAt)}</p>
        <h3>Subtotal: {new Intl.NumberFormat('pt-BR', {
          style:'currency',
          currency:'BRL'
        }).format(props.totalPrice)}</h3>
    </HistoryOrder>
  )
}

export default CardHistoryOrder