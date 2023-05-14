import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from "../../Constants/Url"
import { useParams } from "react-router-dom"
import { CardRestaurant, Category, ContainerRestaurant, SectionProductByCategory } from './Styled'
import { CardRestaurantDetails } from '../../Components/CardRestaurantDetails/CardRestaurantDetails'
import { CardProduct } from '../../Components/CardProduct/CardProduct'
import { Header } from '../../Components/Header/CardHeader'
import { Footer } from '../../Components/Footer/Footer'
import { UseProtectPage } from '../../Hooks/UseProtectPage'
import swal from 'sweetalert'
import { LoadingCircular } from '../../Components/Loading/Loading'

const Restaurant = () => {
  UseProtectPage()
  const { restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState({})
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 1700)
  },[])


  const getRestaurantId = () => {
    axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
      headers: {
        auth: window.localStorage.getItem("token")
      }
    })
      .then((res) => {
        setRestaurant(res.data.restaurant)
       
      })
      .catch((err) => {
        swal(err.response.data.message)
      })
  }

  useEffect(() => {
    getRestaurantId()
  }, [])

  useEffect(() =>{
    if(restaurant.products){
      const newCategory = []
      for(const product of restaurant.products){
        if(!newCategory.includes(product.category))
        newCategory.push(product.category)
      }
      setCategories(newCategory)
    }
  },[restaurant])
  return (
    <>
        {loading ? <LoadingCircular color="error"/>:

    <ContainerRestaurant>
      <Header title={"Restaurante"} back={true} />
      <CardRestaurant>
        <CardRestaurantDetails restaurant={restaurant} key={restaurant.id} />
        {
          restaurant.products && 
          categories.map((category)=>{
            return <SectionProductByCategory>
              <Category>{category}</Category>
              {
                restaurant.products.filter((product)=>{
                  return product.category === category
                })
                .map((product)=>{
                  return<CardProduct product={product} key={product.id} restaurant={restaurant}></CardProduct>
                })
              }
            </SectionProductByCategory>
          })
        }
      </CardRestaurant>
      <br/>
      <br/>
      <Footer/>
    </ContainerRestaurant>
  }
    </>
  )
}

export default Restaurant