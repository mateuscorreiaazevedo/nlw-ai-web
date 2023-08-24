import { Service, errorsHandlers } from '@/modules/core'
import { authConstants as c } from '..'

class AuthService extends Service {
  async users(token: string): Promise<any[]> {
    const response = await this.request<{ data: any[] } & ResponseErrors>({
      url: '/users',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.statusCode !== 200)
      errorsHandlers(
        response.statusCode,
        response.body?.error as string,
        response.body?.type
      )

    return response.body!.data
  }

  async signUp(data: InputSignUpProps): Promise<string> {
    const response = await this.request<{ message: string } & ResponseErrors>({
      url: c.signUpCredentials,
      method: 'post',
      data
    })

    if (response.statusCode !== 200)
      errorsHandlers(
        response.statusCode,
        response.body?.error as string,
        response.body?.type
      )

    return response.body!.message
  }

  async signIn(data: InputSignInProps) {
    const response = await this.request<{ token: string } & ResponseErrors>({
      url: c.signInCredentials,
      method: 'post',
      data
    })

    if (response.statusCode !== 200)
      errorsHandlers(
        response.statusCode,
        response.body?.error as string,
        response.body?.type
      )

    return response.body?.token
  }
}

export const authService = new AuthService()
