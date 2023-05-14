import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CardRestaurant } from "../../Components/CardRestaurants/CardRestaurant"
import { Footer } from "../../Components/Footer/Footer"
import Order from "../../Components/Menu/Order"
import { BASE_URL } from '../../Constants/Url'
import { useGlobal } from "../../Global/GlobalStateContext"
import { goToLogin } from "../../Routes/Coordinator"
import { ContainerFeed, CardsRestaurants, InputSearch, Menu, MenuItem, CardLogout, Buttonlogout } from "./Styled"
import swal from 'sweetalert';
import { HeaderFeed } from "../../Components/Header/HeaderFeed"
import { UseProtectPage } from "../../Hooks/UseProtectPage"
import { LoadingCircular } from "../../Components/Loading/Loading"

const Feed = () => {
  const [restaurants, setRestaurants] = useState([])
  const [inputText, setInputText] = useState("")
  const [categoryRestaurant, setCategoryRestaurant] = useState([])
  const [buttonCategory, setButtonCategory] = useState("")
  const { setters, states } = useGlobal()
  const { setOrder } = setters
  const { order } = states
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 1700)
  },[])


  const navigate = useNavigate()
  UseProtectPage()  

  const getRestaurants = () => {

    axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setRestaurants(res.data.restaurants)
        catogoryFilter(res.data.restaurants)
      })
      .catch((err) => {
        swal(err.data.response.message)
      })

  }

  const logout = () => {
    window.localStorage.removeItem("token")
    goToLogin(navigate)
  }
  const getOrder = async () => {

    await axios.get(`${BASE_URL}/active-order`, {

      headers: {

        auth: localStorage.getItem("token")

      }
    })
      .then((res) => {
        setOrder(res.data.order)
        const expires = res.data.order.expiresAt
        setTimeout(() => {
        }, expires - new Date().getTime())
      })
      .catch((err) => {
        swal(err.response.data.message)
      })

  }


  const restaurantsFilter = restaurants.filter((restaurant) =>
    inputText ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase()) : true
  )
    .filter((restaurant) =>
      buttonCategory ? restaurant.category.toLowerCase().includes(buttonCategory.toLowerCase()) : true
    )
    .map((restaurant) => {
      return <CardRestaurant restaurant={restaurant} key={restaurant.id}></CardRestaurant>
    })

  const catogoryFilter = (res) => {
    const array = []
    res && res.map((cat) => {
      array.push(cat.category)
    })
    const itemDuplicate = [...new Set(array)]
    setCategoryRestaurant(itemDuplicate)
  }


  useEffect(() => {
    getRestaurants()
    getOrder()
  }, [])

  const onChangeInputText = (event) => {
    setInputText(event.target.value)
  }



  return (
    <>
    {loading ? <LoadingCircular color="error"/>:
    <ContainerFeed key={restaurants.id}>
      <HeaderFeed/>
      <CardsRestaurants>
        <CardLogout>
          <Buttonlogout onClick={() => logout()}>Logout</Buttonlogout>
        </CardLogout>
        <InputSearch
          value={inputText}
          onChange={onChangeInputText}
        />
        <Menu>
          <MenuItem onClick={() => setButtonCategory("")}>
            Todos
          </MenuItem>
          {categoryRestaurant.map((category) => {
            return (<MenuItem
              select={false}
              onClick={() => setButtonCategory(category)}
            >
              {category}
            </MenuItem>)
          })}
        </Menu>
        {restaurantsFilter}
      </CardsRestaurants>
      {order && <Order restaurantName={order.restaurantName} totalPrice={order.totalPrice} />}
      <br/>
      <br/>
      <Footer />
    </ContainerFeed>
    }
    </>
  )
}

export default Feed