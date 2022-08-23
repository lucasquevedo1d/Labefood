import styled from "styled-components"

export const Main = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
font-family: 'Bebas Neue', cursive;
`

export const Profiles =  styled.div`
text-align: center;
height: 5%;
border-bottom: 1px solid gainsboro;
`
export const Information = styled.div`
text-align: center;
flex-direction: column;
height: 100%;
width: auto;
`
export const InformPerson = styled.div`
height: 20%;
display: flex;
justify-content: space-between;
align-items: center;
padding: -50px;
div:nth-child(1){
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction:column;
    
}
div:nth-child(2){
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}
`
export const AddressPerson = styled.div`
height: 10%;
background-color: gainsboro;
display: flex;
justify-content: space-around;
align-items: center;
div:nth-child(1){
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
}
div:nth-child(2){
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}
`
export const HistoryShopping = styled.div`
height: 70%;
`