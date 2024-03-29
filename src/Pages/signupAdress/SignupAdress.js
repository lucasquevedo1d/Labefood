import React from 'react'
import { UseForm } from '../../Hooks/UseForm'
import { ButtonAdress, Form, InputMaterial, Main } from './Styled'
import axios from "axios"
import { BASE_URL } from '../../Constants/Url'
import { useNavigate } from 'react-router-dom'
import { goToFeed } from '../../Routes/Coordinator'
import { Header } from '../../Components/Header/CardHeader'
import { Footer } from '../../Components/Footer/Footer'
import swal from 'sweetalert'

const SignupAdress = () => {
  const { form, onchange, clean } = UseForm({
    "street": "",
    "number": "",
    "neighbourhood": "",
    "city": "",
    "state": "",
    "complement": ""
  })
  const navigate = useNavigate()

  const AddAdress = async () => {
    await axios.put(`${BASE_URL}/address`, form, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToFeed(navigate)
        clean()
      })
      .catch((err) => {
        if(form.street < 3){
          return swal(`Preencha o nome da rua`)
        }

        if(form.number < 2){
          return swal(`Preencha o número`)
        }

        if(form.neighbourhood < 3){
          return swal(`Preencha o nome do bairro`)
        }

        if(form.city < 3){
          return swal(`Preencha o nome da cidade`)
        }

        if(form.state < 3){
          return swal(`Preencha o nome do estado`)
        }
        swal(err.response.data.message)
      })
  }

  const onSubmitAdress = (event) => {
    event.preventDefault()
    AddAdress()
  }
  return (
    <Main>
      <Header title={"Meu endereço"} back={() => goToFeed(navigate)} />
      <br/>
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
          margin='normal'
          color='error'
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
          margin='normal'
          color='error'
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
          margin='normal'
          color='error'
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
          margin='normal'
          color='error'
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
          margin='normal'
          color='error'
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
          margin='normal'
          color='error'
        />
        <ButtonAdress type='submit'>Salvar</ButtonAdress>
      </Form>
      <Footer />
    </Main>
  )
}

export default SignupAdress