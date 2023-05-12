import React, { useState } from 'react'
import { UseForm } from '../../Hooks/UseForm'
import { ButtonSignup, InputMaterial, Main, Form } from './Styled'
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from "axios"
import { BASE_URL } from '../../Constants/Url';
import { goToSignupAdress } from '../../Routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import { Header } from "../../Components/Header/CardHeader"
import { Footer } from '../../Components/Footer/Footer';
import swal from 'sweetalert';


const Signup = () => {
  const { form, onchange, clean } = UseForm({
    "name": "",
    "email": "",
    "cpf": "",
    "password": ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    signupPerson()
  }

  const navigate = useNavigate()

  const signupPerson = async () => {
    await axios.post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        swal(`${res.data.user.name} cadastrado com sucesso!`)
        goToSignupAdress(navigate)
      })
      .catch((err) => {
        swal(err.response.data.message)
        clean()
      })
  }
  return (
    <Main>
      <Header title={"Cadastrar"} back={true} />
      <Form onSubmit={onSubmitForm}>
        <InputMaterial
          id="standard-basic"
          type={'text'}
          name='name'
          label="Nome"
          variant="outlined"
          placeholder='Digite seu nome'
          onChange={onchange}
          value={form.name}
        />
        <InputMaterial
          id="standard-basic"
          type={'text'}
          name='email'
          label="Email"
          variant="outlined"
          placeholder='Digite seu Email'
          onChange={onchange}
          value={form.email}
          required
        />
        <InputMaterial
          id="standard-basic"
          type={'text'}
          name='cpf'
          label="CPF"
          variant="outlined"
          placeholder='Digite seu CPF'
          onChange={onchange}
          value={cpfMask(form.cpf)}
          required
        />

        <InputMaterial
          id="standard-basic"
          type={showPassword ? "password" : "text"}
          name='password'
          label="Senha"
          variant="outlined"
          placeholder='Minímo 6 caracteres'
          onChange={onchange}
          value={form.password}
          inputProps={{ minLength: 6 }}
        />

        <IconButton aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          edge="end"
        >{showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
        <ButtonSignup type='submit'>Cadastrar</ButtonSignup>
      </Form>
      <Footer />
    </Main>
  )
}

export default Signup