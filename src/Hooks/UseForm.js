import { useState } from "react";

export const UseForm = (initialState) =>{
    const [form, setForm] = useState(initialState)

    const onchange = (event) =>{
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }

    const clean = () =>{
        setForm(initialState)
    }
    return{form, onchange, clean, setForm}

}