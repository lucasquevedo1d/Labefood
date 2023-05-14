import { Button } from "@mui/material"
import styled from "styled-components"

export const Main = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
font-family: 'Bebas Neue', cursive;
`
export const MainCart = styled.div`
display: flex;
height: 25%;
justify-content: center;
align-items: center;
font-size: 2rem;
`
export const CartConfig = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 95%;
justify-content: space-between;
`
export const InfoProfile = styled.div`
margin-top: 5px;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 1.2rem;
background-color: gainsboro;
width: 100%;
`
export const InfoRestaurant = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-size: 1.2rem;
p:nth-child(1){
    color: red;
}
`
export const SpaceWords = styled.div`
margin: 15px;
`

export const TitlePayment = styled.h3`
margin: auto;
margin-bottom: 20px;
`
export const CartInfo = styled.div`
margin-top:10px;
display: flex;
flex-direction: column;
width: 100%;
`
export const EmptyCart = styled.div`
font-size: 1.5rem;
text-align: center;
color: red;
`
export const Payment = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
p,label{
    font-size: 1.2rem;
}
`
export const Freight = styled.p`
display: flex;
justify-content: flex-end;
margin: 5px;
`
export const Total = styled.div`
display: flex;
justify-content: space-between;
margin: 5px;
p:nth-child(2){
    color: red;
    font-size: 1.5rem;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
div{
    margin: 5px;
}
label{
    font-size: 1.2rem;
    text-transform: uppercase;
}
input{
    height: 20px;
    width: 20%;
}
`
export const ButtonCart=styled(Button)`
&&{
    background-color: red;
    color: white;
    width:100%;
    font-size: larger;
    font-family: 'Bebas Neue', cursive;
    :hover{
        background-color: beige;
        color:black
    }
}
`

export const Linha = styled.div`
width: 20.5rem;
height: 0.063rem;
margin: auto;
margin-top: -20px;
margin-bottom: 10px;
border: solid 1px;
`