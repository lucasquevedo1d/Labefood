import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Constants/Url'
import { Main, Information, InformPerson, AddressPerson } from './Styled'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToAdressEdit, goToFeed, goToLogin, goToProfileEdit } from '../../Routes/Coordinator'
import { Header } from '../../Components/Header/CardHeader'
import { Footer } from '../../Components/Footer/Footer'
import { Buttonlogout } from '../feed/Styled'
import swal from 'sweetalert'
import { Linha } from '../../Components/CardHistoryOrder/styled'
import CardHistoryOrder from '../../Components/CardHistoryOrder/CardHistoryOrder'
import { UseProtectPage } from '../../Hooks/UseProtectPage'
import { LoadingCircular } from '../../Components/Loading/Loading'

export const Profile = () => {
  UseProtectPage()
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem("token")
    goToLogin(navigate)
  }
  const [profilePerson, setProfilePerson] = useState({})
  const [orderHistory, setOrderHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 1700)
  },[])


  const person = async () => {
    await axios.get(`${BASE_URL}/profile`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setProfilePerson(res.data)
      })
      .catch((err) => {
        swal(err.response.data.message)
      })
  }

  const historyOrder = async () =>{
    await axios.get(`${BASE_URL}/orders/history`, { 
      headers: {
      auth: localStorage.getItem("token")
    }
  })

  .then((res) =>{
    setOrderHistory(res.data)
  })

  .catch((err) =>{
    swal(err.response.data.message)
  })
  }
  useEffect(() => {
    person()
    historyOrder()
  }, [])

  return (
        <>
    {loading ? <LoadingCircular color="error"/>:
    <Main>
      <Header title={"Editar"} back={() => goToFeed(navigate)} />
      <Buttonlogout onClick={() => logout()}>Logout</Buttonlogout>
      <Information>
        <InformPerson>
          <div>
            <h4>Dados Pessoais</h4>
            <p>{profilePerson.user && profilePerson.user.name}</p>
            <p>{profilePerson.user && profilePerson.user.email}</p>
            <p>{profilePerson.user && profilePerson.user.cpf}</p>
          </div>
          <div onClick={() => goToProfileEdit(navigate)}>Editar</div>
        </InformPerson>
        <AddressPerson>
          <div>
            <h4>Endereço cadastrado</h4>
            <p>{profilePerson.user && profilePerson.user.address}</p>
          </div>
          <div onClick={() => goToAdressEdit(navigate, profilePerson.user.id)}>Editar</div>
        </AddressPerson>
        <br/>
        <br/>
          <h3>Historico de pedidos</h3>
          <Linha/>
          <br/>
          <br/>
          {orderHistory.orders && orderHistory.orders.length > 0 ? orderHistory.orders.map((index) =>{
            return (
            <CardHistoryOrder 
            restaurantName = {index.restaurantName}
            totalPrice = {index.totalPrice}
            createdAt={index.createdAt}
            />
            )
          }): <p>Você ainda não realizou nenhum pedido</p>}
        
      </Information>
      <Footer />
    </Main>
  }
    </>
  )
}

