import styled from "styled-components";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export const InputMaterial = styled(TextField)`
width: 100%;
`
export const Main = styled.div`
padding: 10px;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Bebas Neue', cursive;
form{
    margin-top: 30px;
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    flex-direction: column;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
height: 50%;
width: 80%;
justify-content: space-evenly;
`
export const ButtonAdress=styled(Button)`
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

export const DivPassword = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`