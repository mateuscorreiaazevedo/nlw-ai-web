import { FormSignIn } from '@/modules/auth'
import React from 'react'

export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-fit min-h-[240px] w-96 flex-col items-stretch justify-between gap-4 rounded-lg border bg-slate-50 p-4">
        <h1 className="self-center text-3xl font-bold">Login</h1>
        <FormSignIn />
      </div>
    </div>
  )
}
