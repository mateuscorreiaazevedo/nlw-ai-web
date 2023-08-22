import { Service, errorsHandlers } from '@/modules/core'
import { authConstants as c } from '..'

class AuthService extends Service {
  async signIn(data: InputSignInProps) {
    const response = await this.request<{ token: string } & ResponseErrors>({
      url: c.signICredentials,
      method: 'post',
      data
    })

    if (response.statusCode === 200) {
      return response.body?.token
    }

    errorsHandlers(response.statusCode, response.body?.error as string)
  }
}

export const authService = new AuthService()
