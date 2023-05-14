import React, { useState } from 'react'
import { ButtonLogin, ButtonSignupAddress, Form, ImgLogin, InputMaterial, Main } from './Styled'
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from "axios"
import { BASE_URL } from '../../Constants/Url';
import { goToFeed, goToSignup } from '../../Routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Logo from '../../Components/Header/img/ifuture.svg'
import { InputAdornment, OutlinedInput } from '@mui/material';
import { useEffect } from 'react';
import Loading from './img/Tela Inicial.png'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)
  const [ErrorEmail, setErrorEmail] = useState("")
  const [ErrorPassword, setErrorPassword] = useState("")
  const [checkErrorEmail, setcheckErrorEmail] = useState(false)
  const [checkErrorPassword, setcheckErrorPassword] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 2700)
  },[])


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onchangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onchangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const userLogin = {
      email,
      password
    }
    loginApi(userLogin)
  }

  const navigate = useNavigate()

  const loginApi = async (body) => {
    await axios.post(`${BASE_URL}/login`, body)

      .then((res) => {
        setEmail("")
        setPassword("")
        setErrorEmail("")
        setErrorPassword("")
        setcheckErrorEmail(false)
        setcheckErrorPassword(false)
        localStorage.setItem("token", res.data.token)
        goToFeed(navigate)
      })
      .catch((err) => {
        if (err.response.data.message.includes("Senha incorreta")) {
          setErrorPassword(err.response.data.message)
          setcheckErrorPassword(true)
        } else {
          setErrorEmail(err.response.data.message)
          setcheckErrorEmail(true)
        }
      })


  }
  return (
    <>
    {(loading && !window.localStorage.getItem('token')) ? <ImgLogin src={Loading}/>:
    <Main>
      <br />
      <br />
      <br />
      <br />
      <img src={Logo} />
      <Form onSubmit={onSubmitLogin}>
        <InputMaterial
          error={checkErrorEmail}
          helperText={checkErrorEmail ? ErrorEmail : ""}
          id="standard-basic"
          type={"email"}
          label="Email"
          variant="outlined"
          placeholder='email@email.com'
          onChange={onchangeEmail}
          value={email}
          color='error'
        />  
        
         <OutlinedInput
          error={checkErrorPassword}
          helper={checkErrorPassword ? ErrorPassword : ""}
          id="standard-basic"
          type={showPassword ? 'password' : 'text'}
          label="Senha"
          variant="outlined"
          placeholder='Minímo 6 caracteres'
          onChange={onchangePassword}
          value={password}
          color='error'
          endAdornment={
            <InputAdornment position='end'>
              <IconButton 
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          
        />
          <ButtonLogin
          type='submit'
        >
          Entrar
        </ButtonLogin>
        </Form>
      
      
      <ButtonSignupAddress
        onClick={() => goToSignup(navigate)}
      >
        Não possui cadastrado? Clique aqui.
      </ButtonSignupAddress>
    </Main>
}
    </>
  )
}

export default Login