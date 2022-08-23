import React from 'react'
import { UseForm } from '../../Hooks/UseForm'
import { ButtonAdress, Form, InputMaterial, Main } from './Styled'
import axios from "axios"
import { BASE_URL } from '../../Constants/Url'
import { useNavigate } from 'react-router-dom'
import { goToFeed } from '../../Routes/Coordinator'
import { Header } from '../../Components/Header/CardHeader'
import { Footer } from '../../Components/Footer/Footer'

const SignupAdress = () => {
  const {form, onchange, clean} = UseForm({
    "street": "",
    "number": "",
    "neighbourhood": "",
    "city": "",
    "state":"",
    "complement":""
  })
  const navigate = useNavigate()
  
  const AddAdress = async () =>{
    await axios.put(`${BASE_URL}/address`, form,{
      headers:{
        auth:localStorage.getItem("token")
      }
    })
    .then((res) =>{
      localStorage.setItem("token",res.data.token)
      goToFeed(navigate)
      clean()
    })
    .catch((err) =>{
      console.log(err.response.data.message)
    })
  }

  const onSubmitAdress = (event) =>{
    event.preventDefault()
    AddAdress()
  }
  return (
    <Main>
      <Header title={"Meu endereço"} back={true}/>
      {/* <h1>Meu Endereço</h1> */}
      <Form onSubmit={onSubmitAdress}>
      <InputMaterial
      id="standard-basic" 
      type={'text'}
      name='street'
      label="Logradouro"
      variant="outlined"
      placeholder='Rua/Av'
      onChange={onchange}
      value={form.street}
      required
      />
      <InputMaterial
      id="standard-basic" 
      type={'number'}
      name='number'
      label="Número"
      variant="outlined"
      placeholder='Número'
      onChange={onchange}
      value={form.number}
      required
      />
      <InputMaterial
      id="standard-basic" 
      type={'text'}
      name='complement'
      label="complemento"
      variant="outlined"
      placeholder='Apto/Bloco'
      onChange={onchange}
      value={form.complement}
      />
      <InputMaterial
      id="standard-basic" 
      type={'text'}
      name='neighbourhood'
      label="Bairro"
      variant="outlined"
      placeholder='Bairro'
      onChange={onchange}
      value={form.neighbourhood}
      required
      />
      <InputMaterial
      id="standard-basic" 
      type={'text'}
      name='city'
      label="Cidade"
      variant="outlined"
      placeholder='Cidade'
      onChange={onchange}
      value={form.city}
      required
      />
      <InputMaterial
      id="standard-basic" 
      type={'text'}
      name='state'
      label="Estado"
      variant="outlined"
      placeholder='Estado'
      onChange={onchange}
      value={form.adress}
      required
      />
    <ButtonAdress type='submit'>Salvar</ButtonAdress>
      </Form>
      <Footer/>
      </Main>
  )
}

export default SignupAdress