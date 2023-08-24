'use client'

import { useAuth } from '../hooks/use-auth'
import React from 'react'

type Props = {
  user: UserType | null
}

const InitializerAuthStore: React.FC<Props> = ({ user }) => {
  const initializerRef = React.useRef(false)

  if (!initializerRef.current) {
    useAuth.setState({ user })
    initializerRef.current = true
  }

  return null
}
export default InitializerAuthStore
