import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/CardHeader'
import { BASE_URL } from '../../Constants/Url'
import { UseForm } from '../../Hooks/UseForm'
import { goToFeed, goToProfile } from '../../Routes/Coordinator'
import { ButtonProfileEdit, DivHeader, Form, InputMaterial, Main } from './Styled'
import swal from 'sweetalert'

const ProfileEdit = () => {
 const { form, onchange, clean, setForm } = UseForm({
        "name": "",
        "email": "",
        "cpf": ""
    })
 
    const navigate = useNavigate()
    const editPerson = async () => {
        await axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setForm({
                "name": res.data.user.name,
                "email": res.data.user.email,
                "cpf": res.data.user.cpf
                })
            })
            .catch((err) => {
                swal(err.response.data.message)
            })
    }

    const editProfile = async () => {
        await axios.put(`${BASE_URL}/profile`, form, {
            headers: {
                auth: localStorage.getItem("token")
            }

        })
            .then((res) => {
                swal(`Cadastro atualizado com sucesso`)
               
            })
            .catch((err) => {
                swal(err.response.data.message)
            })
    }

    useEffect(() => {
        editPerson()
    }, [])


    const cpfMask = (value) => {
        if (form.cpf && form.cpf) {
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
            
            <Header title={"Editar"} back={() => goToFeed(navigate)} />
        
            <Form onSubmit={onSubmitForm}>
                <InputMaterial
                    id="standard-basic"
                    type={'text'}
                    name='name'
                    placeholder='Name'
                    variant="outlined"
                    onChange={onchange}
                    value={form.name}
                    margin='normal'

                />
                <InputMaterial
                    id="standard-basic"
                    type={'text'}
                    name='email'
                    placeholder='Email'
                    variant="outlined"
                    onChange={onchange}
                    value={form.email}
                    required
                    margin='normal'
                />
                <InputMaterial
                    id="standard-basic"
                    type={'text'}
                    name='cpf'
                    placeholder='cpf'
                    variant="outlined"
                    onChange={onchange}
                    value={cpfMask(form.cpf)}
                    required
                    margin='normal'
                />

                    <br/>
                <ButtonProfileEdit type='submit' sx={{mb:25}}>Salvar</ButtonProfileEdit>
            </Form>
            <Footer/>
        </Main>
    )
}

export default ProfileEdit