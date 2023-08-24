import dynamic from 'next/dynamic'

export * from './service/user-service'
export * from './hooks/use-auth'

export const InitializerAuthStore = dynamic(
  () => import('./components/initializer-auth-store'),
  { ssr: false }
)
