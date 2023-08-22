import dynamic from 'next/dynamic'

export { default as authConstants } from './constants/auth'
export * from './service/auth-service'
export * from './schemas/auth-schemas'

export const FormSignIn = dynamic(() => import('./components/form-login'), {
  ssr: true
})
