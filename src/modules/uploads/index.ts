import dynamic from 'next/dynamic'

export const FormUpload = dynamic(() => import('./components/FormUpload'), {
  ssr: false
})
