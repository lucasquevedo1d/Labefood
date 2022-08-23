import styled from "styled-components";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const OrderContainer = styled.div`
display: grid;
display: flex;
align-items: center;
height: 7.375rem;
position: fixed;
bottom: 3.062rem;
width: 100%;
background-color: red;
z-index: 2;
padding: 0 0 0 2rem;
`
export const OrderContainerSpace = styled.div`
height: 7.375rem;
`
export const ClokedStyled = styled(AccessTimeIcon)`
color: white;

`
export const BoxInform = styled.div`

`
export const Title = styled.p`
font-family: 'Bebas Neue', cursive;
font-size:2rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: black;
padding: 0.25rem;
`

export const RestaurantName = styled.h3`
font-family: 'Bebas Neue', cursive;
font-size:1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: white;
padding: 0.25rem;
`
export const TotalPrice = styled.p`
font-family: 'Bebas Neue', cursive;
font-size:1rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: white;
padding: 0.25rem;
`