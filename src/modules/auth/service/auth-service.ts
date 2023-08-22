import { Service, errorsHandlers } from '@/modules/core'
import { authConstants as c } from '..'

class AuthService extends Service {
  async signUp(data: InputSignUpProps) {
    const response = await this.request<{ message: string } & ResponseErrors>({
      url: c.signUpCredentials,
      method: 'post',
      data
    })

    if (response.statusCode === 200) {
      return response.body?.message
    }

    errorsHandlers(
      response.statusCode,
      response.body?.error as string,
      response.body?.type
    )
  }

  async signIn(data: InputSignInProps) {
    const response = await this.request<{ token: string } & ResponseErrors>({
      url: c.signInCredentials,
      method: 'post',
      data
    })

    if (response.statusCode === 200) {
      return response.body?.token
    }
    errorsHandlers(
      response.statusCode,
      response.body?.error as string,
      response.body?.type
    )
  }
}

export const authService = new AuthService()
