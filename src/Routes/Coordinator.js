export const goToLogin = (navigate) =>{
    navigate("/")
}

export const goToFeed = (navigate) =>{
    navigate("/feed")
}

export const goToSignup = (navigate) =>{
    navigate("/signup")
}

export const goToSignupAdress = (navigate) =>{
    navigate("/signup/adress")
}

export const goToRestaurants = (navigate, id) =>{
    navigate(`/feed/${id}`)
}

export const goToBack = (navigate) =>{
    navigate(-1)
}

export const goToCart = (navigate) =>{
    navigate("/cart")
}

export const goToProfile = (navigate) =>{
    navigate("/profile")
}
export const goToProfileEdit = (navigate, id) =>{
    navigate(`/profile/${id}`)
}
export const goToAdressEdit = (navigate, id) =>{
    navigate(`/adressEdit/${id}`)
}
