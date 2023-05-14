import styled from "styled-components";

export const ContainerFeed = styled.div`
min-height: 150vh;
`
export const CardsRestaurants = styled.div`
padding: 0 1rem;
`
export const InputSearch = styled.input`
width: 100%;
height: 1.5rem;
padding: 1rem 0.503rem 1rem 1.063rem;
border-radius: 2px;
border: solid 1px gainsboro;
border-radius: 7px 7px 7px 7px;
`
export const Menu = styled.nav`
height: 2.625rem;
display: flex;
align-items: center;
padding: 0 1rem 0 0;
width: 100%;
overflow-x: auto;
`
export const MenuItem = styled.button`
font-family: 'Bebas Neue', cursive;
font-size:1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: ${(p) => p.select ? "red" : "black"};
background-color: transparent;
border:none;
outline: none;
padding: 0 1rem;
color: black;
:hover{
    color:  red;
}
`

export const CardLogout = styled.div`
display: flex;
justify-content:end;
`
export const Buttonlogout = styled.button`
color: black;
font-family: 'Bebas Neue', cursive;
background-color: transparent;
border: transparent;
`

