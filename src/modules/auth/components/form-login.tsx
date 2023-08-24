'use client'

import { authSchemas, authService, tokenHelper } from '..'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import React from 'react'

const FormLogin = () => {
  const router = useRouter()
  const { handleSubmit, register, formState, setError } = useForm<InputSignInProps>({
    resolver: zodResolver(authSchemas.signIn)
  })
  const [loading, setLoading] = React.useState(false)

  async function handleSignIn(data: InputSignInProps) {
    setLoading(true)

    try {
      const token = await authService.signIn(data)
      tokenHelper.set(token as string)
      router.refresh()
      router.push('/')
    } catch (error) {
      if ((error as Error).stack === 'invalidCredentials') {
        setError('password', {
          type: 'manual',
          message: (error as Error).message
        })
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
      <span>{formState.errors.emailOrUsername?.message}</span>
      <input
        {...register('emailOrUsername')}
        type="text"
        data-error={formState.errors.emailOrUsername}
        placeholder="Email ou nome de usuário"
        className="h-8 px-2 data-[error]:bg-red-200"
      />
      <span>{formState.errors.password?.message}</span>
      <input
        {...register('password')}
        data-error={formState.errors.password}
        type="text"
        placeholder="Senha"
        className="h-8 border px-2 outline-none data-[error]:border-red-500"
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
