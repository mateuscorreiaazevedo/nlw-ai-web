import { z } from 'zod'

export const authSchemas = {
  signIn: z.object({
    emailOrUsername: z.string().nonempty('E-mail ou nome de usuário obrigatório.'),
    password: z.string().nonempty('Senha obrigatória.')
  })
}
