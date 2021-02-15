import { useRef } from 'react';
import { useRouter } from 'next/router'
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from "@unform/web";
import axios from 'axios'

import Input from '../components/Input';

interface FormData {
    email: string;
    password: string;
    name: string;
}

export default function Cadastrar() {

    const router = useRouter()

    const formRef = useRef<FormHandles>(null)

    const handleSubmit: SubmitHandler<FormData> = async ({ email, password, name }) => {
        try {

            const res = await axios.post(`/api/register-user`, {
                email,
                password,
                name
            })
            alert(res.data.msg)
            router.push('/')
        } catch (err) {
            console.log(err)
            alert("Falha ao criar usuario usuario")
        }
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <Form ref={formRef} onSubmit={handleSubmit} className='bg-white w-11/12 sm:w-auto pb-12 pt-10 px-6 rounded-xl'>
                <h1 className='text-4xl text-purple-800 font-bold mb-6'>Cadastro</h1>
                <Input 
                    name='name'
                    label='Nome'
                    placeholder='Digite seu nome...'
                    type='text'
                    required
                />

                <Input 
                    name='email'
                    label='E-mail'
                    placeholder='Digite seu e-mail...'
                    type='email'
                    required
                />

                <Input 
                    name='password'
                    label='Sua senha'
                    placeholder='Digite sua senha...'
                    type='password'
                    minLength={6}
                    required
                />

                <button className='h-12 w-full bg-purple-600 text-white rounded-lg mt-6 text-lg font-bold uppercase'>Cadastrar</button>

            </Form>
        </div>
    )
}