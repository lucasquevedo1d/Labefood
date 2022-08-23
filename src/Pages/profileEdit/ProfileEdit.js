import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/CardHeader'
import { BASE_URL } from '../../Constants/Url'
import { UseForm } from '../../Hooks/UseForm'
import { goToProfile } from '../../Routes/Coordinator'
import { ButtonProfileEdit, DivHeader, Form, InputMaterial, Main } from './Styled'

const ProfileEdit = () => {
    const { form, onChange, clean } = UseForm({
        "name": "",
        "email": "",
        "cpf": ""
    })
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate()
    // const [profileEdit, setProfileEdit] = useState({})
    const editPerson = async () => {
        await axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res.data.user)
                setName(res.data.user.name)
                setEmail(res.data.user.email)
                setCpf(res.data.user.cpf)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const editProfile = async () => {
        const body = {
            name,
            email,
            cpf,

        }
        await axios.put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }

        })
            .then((res) => {
                console.log(res.data.user)
                // setProfileEdit(res.data.user)
               
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        editPerson()
    }, [])


    const cpfMask = (value) => {
        if (cpf && cpf) {
            return value


                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1")
        }
    }

    const onSubmitForm = () => {
        editProfile()
        goToProfile(navigate)

    }
    return (
        <Main>
            
            <Header title={"Editar"} back={true} />
        
            <Form onSubmit={onSubmitForm}>
                <InputMaterial
                    id="standard-basic"
                    type={'text'}
                    name='name'
                    placeholder='Name'
                    variant="outlined"
                    onChange={((e) => setName(e.target.value))}
                    value={name}
                />
                <InputMaterial
                    id="standard-basic"
                    type={'text'}
                    name='email'
                    placeholder='Email'
                    variant="outlined"
                    onChange={((e) => setEmail(e.target.value))}
                    value={email}
                    required
                />
                <InputMaterial
                    id="standard-basic"
                    type={'text'}
                    name='cpf'
                    placeholder='cpf'
                    variant="outlined"
                    onChange={((e) => setCpf(e.target.value))}
                    value={cpfMask(cpf)}
                    required
                />


                <ButtonProfileEdit type='submit'>Salvar</ButtonProfileEdit>
            </Form>
            <Footer/>
        </Main>
    )
}

export default ProfileEdit