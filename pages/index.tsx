import { useRef } from 'react';
import Link from 'next/link'
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import axios from 'axios'

import Input from '../components/Input';


interface FormData {
  email: string;
  password: string
}

export default function Home() {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = async ({email,password}) => {
    try {

      const res = await axios.post(`/api/auth-user`, {
        email,
        password,
      })
      alert(res.data.msg)
    } catch (err) {
      console.log(err)
      alert("Falha ao autenticar usuario")
    }

  }

  return (
    <div className='home flex justify-center items-center '>
      <div className='relative h-auto w-11/12 rounded-xl px-6 py-10 md:rounded-none md:absolute md:right-0 md:top-0 md:w-2/5 md:max-w-lg bg-white flex items-center justify-center md:h-screen'>
        <Form className='max-w-sm h-auto w-full' ref={formRef} onSubmit={handleSubmit}>
          <h3 className='text-4xl text-purple-800 font-bold mb-6'>Fazer login</h3>
          <Input 
            label="E-mail"
            name='email'
            type="email" 
            placeholder='Digite seu usuario' 
            autoComplete='email'
            required
          />

          <Input 
            label='Senha'
            name='password'
            type="password" 
            placeholder='Digite sua senha'
            autoComplete='password'
          />

          <div className='mt-6'>
            <Link href="/cadastrar">
              <a className='text-md text-purple-700 font-medium underline'> Cadastrar-se</a>
            </Link>
          </div>

          <button className='h-12 w-full bg-purple-600 text-white rounded-lg mt-6 text-lg font-bold uppercase'>Login</button>
        </Form>
      </div>
    </div>
  )
}
