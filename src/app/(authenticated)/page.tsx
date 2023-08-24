import { useAuth } from '@/modules/user'

export default async function Home() {

  return (
    <div>
      <Link href="/api/auth/logout">Sair</Link> {JSON.stringify(user, null, 2)}
    </div>
  )
}
