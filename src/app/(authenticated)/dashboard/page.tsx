'use client'

import { useAuth } from '@/modules/user'
import React from 'react'

export default function Dashboard() {
  const { user } = useAuth()

  return <div>{JSON.stringify(user?.first_name, null, 2)}</div>
}
