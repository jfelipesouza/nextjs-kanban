'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'

const SignInSchema = z.object({
  email: z
    .string({ required_error: 'Campo obrigatório' })
    .email({ message: 'Formato inválido de e-mail' }),
  password: z
    .string({ required_error: 'Campo obrigatório' })
    .min(8, { message: 'Senha muito curta' })
})

type SignInFormData = z.infer<typeof SignInSchema>

const ErrorText: React.FC<{ message: string }> = ({ message }) => {
  return <span className={cn(`text-red-500 text-sm font-bold`)}>{message}</span>
}

export const SigninForm = () => {
  const { reset, register, formState, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema)
  })

  const [disableButton, setDisableButton] = useState(false)

  const link = useRouter()

  const handleSubmitLogin = async (data: SignInFormData) => {
    setDisableButton(true)
    const login = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (login.status === 404) {
      alert('Não foi possivel fazer login agora tente novamente mais tarde')
    } else if (login.status === 200) {
      const response = await login.json()
      if (response.jwt) {
        link.push('/auth')
      }
    } else {
      alert('Estamos passando por atualizações, tente mais tarde.')
    }

    reset()
    setDisableButton(false)
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleSubmitLogin)}
    >
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Digite o seu e-mail"
          type="email"
          {...register('email')}
        />

        {formState.errors.email && (
          <ErrorText message={formState.errors.email.message!} />
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="Digite a sua senha"
          {...register('password')}
        />

        {formState.errors.password && (
          <ErrorText message={formState.errors.password.message!} />
        )}
      </div>
      <Button className="w-full text-white font-bold" disabled={disableButton}>
        Entrar agora
      </Button>
    </form>
  )
}
