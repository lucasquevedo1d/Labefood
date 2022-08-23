import styled from "styled-components";

export const ContainerCardProducts = styled.div`
width: 100%;
margin: 0.5rem 0;
display: flex;
border: solid 1px gainsboro;
border-radius: 7px;
`
export const ImageProduct = styled.img`
width: 100%;
width: 6rem;
height: 7rem;
border-radius: 7px 7px 0 0;
`
export const QuantityProduct = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid 1px gainsboro;
width: 2.063rem;
height: 2.063rem;
color: red;
font-family: 'Bebas Neue', cursive;
`
export const BoxNameQuantity = styled.div`
display: flex;
justify-content: space-between;
` 
export const NameProduct = styled.h3`
font-family: 'Bebas Neue', cursive;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color:red;
margin-bottom: 0.625rem;
`
export const BoxInform = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 1rem 0 0 1rem;
flex-grow: 1;
`
export const InformDescrption = styled.p`
font-family: 'Bebas Neue', cursive;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
color:gray;
`
export const BoxInformePriceButton = styled.div`
display: flex;
justify-content: space-between;
`
export const InformButton = styled.button`
width: 5.625rem;
height: 1.938rem;
border-radius: 8px 0 8px 0;
background-color: white;
outline: 0;
border: 1px gainsboro solid;
font-family: 'Bebas Neue', cursive;
font-size: large;
:hover{

    color:red;
}
`
export const InformPrice = styled.div`
font-family: 'Bebas Neue', cursive;
color: grey;
font-size: larger;
`
export const InformButtonRemove = styled.button`
width: 5.625rem;
height: 1.938rem;
border-radius: 8px 0 8px 0;
background-color: white;
outline: 0;
border: 1px gainsboro solid;
font-family: 'Bebas Neue', cursive;
font-size: large;
:hover{

color:red;
}
`