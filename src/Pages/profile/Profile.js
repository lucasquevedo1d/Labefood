import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Constants/Url'
import { Main, Information, InformPerson, AddressPerson, HistoryShopping  } from './Styled'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToAdressEdit, goToLogin, goToProfileEdit } from '../../Routes/Coordinator'
import { Header } from '../../Components/Header/CardHeader'
import { Footer } from '../../Components/Footer/Footer'
import { Buttonlogout } from '../feed/Styled'

export const Profile = () => {
 const navigate = useNavigate()

 const logout = () =>{
  window.localStorage.removeItem("token")
  goToLogin(navigate)
}
  const [profilePerson, setProfilePerson] = useState({})
  const person = async () =>{
    await axios.get(`${BASE_URL}/profile`,{
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((res) =>{
      console.log(res.data)
      setProfilePerson(res.data)
    })
    .catch((err) =>{
      console.log(err.response)
    })
  }
  useEffect(()=>{
    person()
  },[])

  return (
    <Main>
       <Header title={"Editar"} back={true} />
       <Buttonlogout onClick={() => logout ()}>Logout</Buttonlogout>
      <Information>
        <InformPerson>
          <div>
            <p>{profilePerson.user && profilePerson.user.name }</p>
            <p>{profilePerson.user && profilePerson.user.email }</p>
            <p>{profilePerson.user && profilePerson.user.cpf }</p>
          </div>
          <div onClick={() => goToProfileEdit(navigate)}>Editar</div>
        </InformPerson>
        <AddressPerson>
          <div>
          <h4>Endereço cadastrado</h4>
          <p>{profilePerson.user && profilePerson.user.address }</p>
          </div>
          <div onClick={() => goToAdressEdit(navigate, profilePerson.user.id)}>Editar</div>
        </AddressPerson>
        <HistoryShopping>historico de compras</HistoryShopping>
      </Information>
      <Footer/>
    </Main>
  )
}

