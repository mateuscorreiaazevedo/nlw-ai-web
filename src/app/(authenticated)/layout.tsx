import { InitializerAuthStore, useAuth, userService } from '@/modules/user'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export default async function AppLayout({ children }: { children: ReactNode }) {
  const token = cookies().get('auth-case.token')?.value
  const response = await userService.me(token!)
  useAuth.setState({ user: response })

  return (
    <>
      {children}
      <InitializerAuthStore user={response} />
    </>
  )
}
