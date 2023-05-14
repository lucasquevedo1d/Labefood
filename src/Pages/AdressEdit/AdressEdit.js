import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/CardHeader'
import { BASE_URL } from '../../Constants/Url'
import { UseForm } from '../../Hooks/UseForm'
import { goToProfile } from '../../Routes/Coordinator'
import { ButtonAdress, Form, InputMaterial, Main } from './Styled'
import { UseProtectPage } from '../../Hooks/UseProtectPage'

const AdressEdit = () => {
  UseProtectPage()
  const navigate = useNavigate()
  const { form, onchange, clean, setForm } = UseForm({
    "street": "",
    "number": "",
    "neighbourhood": "",
    "city": "",
    "state": "",
    "complement": ""
  })

  const getAddress = async () => {
    await axios.get(`${BASE_URL}/profile/address`, {
      headers: {
        auth: window.localStorage.getItem("token")
      }
    })
      .then((res) => {
        setForm({
          "street": res.data.address.street,
          "number": res.data.address.number,
          "neighbourhood": res.data.address.neighbourhood,
          "city": res.data.address.city,
          "state": res.data.address.state,
          "complement": res.data.address.complement
        })

      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const AddAddress = async () => {
    const token = localStorage.getItem("token")
    await axios.put(`${BASE_URL}/address`, form, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }





  const onSubmitAdress = () => {

    getAddress()
    goToProfile(navigate)
    AddAddress()
  }

  useEffect(() => {
    getAddress()
    AddAddress()
  }, [])
  return (
    <Main>
      <Header title={"Meu endereço"} back={true} />
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
        />
        <InputMaterial
          id="standard-basic"
          type={'text'}
          name='state'
          label="Estado"
          variant="outlined"
          placeholder='Estado'
          onChange={onchange}
          value={form.state}
          required
          margin='normal'
        />
        <ButtonAdress type='submit' margin='normal'>Salvar</ButtonAdress>
      </Form>
      <br />
      <br />
      <Footer />
    </Main>
  )
}

export default AdressEdit