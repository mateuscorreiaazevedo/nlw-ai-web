'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { authSchemas, authService } from '..'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import React from 'react'
import dayjs from 'dayjs'

const FormLogin = () => {
  const router = useRouter()
  const { handleSubmit, register, formState } = useForm<InputSignInProps>({
    resolver: zodResolver(authSchemas.signIn)
  })
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  async function handleSignIn(data: InputSignInProps) {
    setLoading(true)

    try {
      const token = await authService.signIn(data)
      Cookies.set('token', token!, {
        // Expires in 30 days
        expires: dayjs(new Date()).add(30, 'day').toDate()
      })
      router.push('/')
    } catch (error) {
      if ((error as ResponseErrors).type === 'credentials') {
        setErrorMessage((error as ResponseErrors).error as string)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      className="flex w-full flex-col gap-1"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <span>{errorMessage}</span>
      <span>{formState.errors.emailOrUsername?.message}</span>
      <input
        {...register('emailOrUsername')}
        type="text"
        placeholder="Email ou nome de usuário"
        className="h-8 px-2"
      />
      <span>{formState.errors.password?.message}</span>
      <input
        {...register('password')}
        type="text"
        placeholder="Senha"
        className="h-8 px-2"
      />
      <button
        type="submit"
        className="mt-3 h-8 w-full rounded-md bg-blue-500 font-bold text-white"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  )
}

export default FormLogin
