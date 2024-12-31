'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const SignInForm = () => {
  const [form, setForm] = useState({ email: '', pass: '' })

  useEffect(() => {
    console.log(form)
  }, [form])

  return (
    <form className=" flex flex-col bg-white w-4/5 py-5 px-4 gap-4 rounded">
      <h2 className="text-lg  text-center text-black mb-2 font-medium">
        Entre agora e não perca nada
      </h2>
      <div className="flex flex-col py-1 gap-1">
        <label htmlFor="email" className=" text-black text-base">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-2 py-2 text-base border-[1px] rounded-sm"
          placeholder="Digite o seu email"
          onChange={e => {
            e.preventDefault()
            setForm(prev => {
              return { ...prev, email: e.target.value }
            })
          }}
        />
      </div>
      <div className="flex flex-col py-1 gap-1">
        <label htmlFor="password" className=" text-black text-base">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-2 py-2 text-base border-[1px] rounded-sm"
          placeholder="Insira a sua senha"
          onChange={e => {
            e.preventDefault()
            setForm(prev => {
              return { ...prev, pass: e.target.value }
            })
          }}
        />
      </div>
      <div className="flex items-end justify-between">
        <Link href="/signup" className="text-blue-700 text-sm">
          Novo por aqui?
        </Link>
        <Link href="/recover" className="text-blue-700 text-sm">
          Esqueceu a sua senha?
        </Link>
      </div>
      <button
        disabled={form.email === '' || form.pass === '' ? true : false}
        className="w-full mt-4 py-4 bg-blue-900 text-white rounded flex items-center justify-center disabled:bg-blue-900/50"
      >
        Enviar
      </button>
    </form>
  )
}
