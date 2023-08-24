import { useAuth } from '@/modules/user'
import { Link } from '@/modules/core'

export default async function Home() {
  const { user } = useAuth.getState()

  return (
    <div>
      <Link href="/api/auth/logout">Sair</Link> {JSON.stringify(user, null, 2)}
    </div>
  )
}
