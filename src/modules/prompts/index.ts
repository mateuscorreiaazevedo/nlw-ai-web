import dynamic from 'next/dynamic'

export const FormPrompt = dynamic(() => import('./components/FormPrompt'), {
  ssr: false
})
