import styled from "styled-components"

export const Main = styled.div`
min-height: 100vh;
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
margin-bottom: 270px;
`
export const InformPerson = styled.div`
height: 20%;
display: flex;
justify-content: space-between;
align-items: center;
padding: -50px;
margin-left: 70px;
div:nth-child(1){
    width:80%;
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
    margin-right: 20px;
}
`
export const AddressPerson = styled.div`
height: 10%;
background-color: gainsboro;
display: flex;
justify-content: space-between;
align-items: center;
div:nth-child(1){
    width:80%;
    padding: 30px;
    display: flex;
    flex-direction:column;
    margin-left: 70px;

    
}
div:nth-child(2){
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
}
`
