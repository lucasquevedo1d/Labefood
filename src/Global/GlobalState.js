import { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = ({ children }) =>{
    const [cart, setCart] = useState([])
    const [restaurant, setRestaurant] = useState({})
    const [order, setOrder] = useState(null)

    const addToCart = (product, quantity, newRestaurant) =>{
        console.log(newRestaurant.id, restaurant.id)
        if(newRestaurant.id === restaurant.id){
            setCart([ ...cart, { ...product, quantity }])
        }else{
            setCart([{ ...product, quantity }])
            setRestaurant(newRestaurant)
        }
    }

    const removeCart = (id) =>{
        const index = cart.findIndex((products) => products.id === id)
        const newCart = [ ...cart ]
        newCart.splice(index, 1)
        setCart(newCart)
    }
    const states = { cart, restaurant, order }
    const requests = { addToCart, removeCart  }
    const setters = { requests, setOrder, setCart  }
    
  
    return <GlobalStateContext.Provider value={{states, requests, setters}}>
        {children}
    </GlobalStateContext.Provider>
}