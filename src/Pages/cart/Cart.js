import React, { useEffect, useState } from 'react'
import { ButtonCart, CartConfig, CartInfo, EmptyCart, Form, InfoProfile, InfoRestaurant, Linha, Main, MainCart, SpaceWords, TitlePayment } from './Styled'
import { BASE_URL } from '../../Constants/Url'
import { useRequestData } from '../../Hooks/useRequestData'
import { Header } from '../../Components/Header/CardHeader'
import { CardProduct } from '../../Components/CardProduct/CardProduct'
import { useGlobal } from '../../Global/GlobalStateContext'
import axios from 'axios'
import { ImageRestaurant } from '../../Components/CardRestaurants/Styled'
import { goToFeed, goToLogin } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'
import swal from 'sweetalert'
import { UseProtectPage } from '../../Hooks/UseProtectPage'
import { LoadingCircular } from '../../Components/Loading/Loading'


const Cart = () => {
  UseProtectPage()
  const [payment, setPayment] = useState("")
  const [paymentMethod] = useState(["money", "creditCard"])
  const [fullPrice, setFullPrice] = useState(0)
  const { states, setters } = useGlobal()
  const { cart, restaurant,  } = states
  const [profile, setProfile] = useState({})
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 1700)
  },[])

  
  const onchangePayment = (event) =>{
    setPayment(event.target.value)
    
  } 

 

 
  const TotalPrice = () =>{
    let total = 0
    if(restaurant && restaurant.shipping ){
    for (const product of cart){
      
        total += product.price * product.quantity
      }
     
    }
    setFullPrice(total)
  }

  

const getProfile = async () =>{
  await axios.get(`${BASE_URL}/profile`, {

  headers:{

    auth: window.localStorage.getItem("token")

  }
})
  .then((res) =>{
    console.log(res.data)
    setProfile(res.data)
  })
  .catch((err) =>{
    swal(err.data.response.message)
  })
}

  const placeOrder = async () =>{
  
    const body = {
      products: cart.map((product)=>{
        return({
          id:product.id,
          quantity: product.quantity
      })
      
      }),
      paymentMethod:payment
    }
    
    await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body,{
      headers:{
        auth: window.localStorage.getItem("token")
      }
    })
    .then((res)=>{
      setters.setOrder(res.data)
      setters.setCart([])
    })
    .catch((err) =>{
      swal(err.response.data.message)
    })
  }

  useEffect(()=>{
    TotalPrice()
    getProfile()
  },[])

  const onSubmitPlaceOrder = () =>{
    placeOrder()
    
  }
  
  return (
    <>
    {loading ? <LoadingCircular color="error"/>:
    <Main>
      <MainCart >
        <Header title={"Meu carrinho"} back={true} />
      </MainCart>
      <CartConfig>
        <InfoProfile>
        <p>endereço de entrega</p>
        <p>{profile.user && profile.user.address}</p>
        </InfoProfile>
        </CartConfig> 
        <InfoRestaurant>
          <ImageRestaurant src={restaurant.logoUrl}/>
          <SpaceWords>
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime} min</p>
          </SpaceWords>
        </InfoRestaurant>
        <CartInfo>
          {restaurant.shipping && cart.length > 0 ? cart.map((product)=>{
        return (<CardProduct
        key={product.id}
        product={product}
        restaurant={restaurant}
        />
          )
        }): 
        <EmptyCart>
          <br/>
          <p>Carrinho vazio</p> 
          <br/>
          </EmptyCart>}
        </CartInfo>
        
     
      <SpaceWords>
        <p>Frete {restaurant.shipping ? new Intl.NumberFormat('pt-BR', {
          style:'currency',
          currency:'BRL'
        }).format(restaurant.shipping) : 0}</p>
          <p>Subtotal</p>
        <p>{new Intl.NumberFormat('pt-BR', {
          style:'currency',
          currency:'BRL'
        }).format(fullPrice)}</p>
      </SpaceWords>
     
      
      <>
        <TitlePayment>Forma de pagamento</TitlePayment>
        <Linha/>
        <Form >
          {paymentMethod.map((key)=>{
            return(
              <div
              key={key}
              ><input
              checked={payment === key}
              name={key}
              id={key}
              type={'radio'}
              onChange={onchangePayment}
              value={key}
              ></input>
              <label htmlfor={key}>{key}</label>
              </div>
            )
          })}
        <br/>
        <br/>
        <ButtonCart onClick={() => onSubmitPlaceOrder()}>Confirmar</ButtonCart>
        </Form>
      </>
      </Main>
    }
      </>
  )
}

export default Cart