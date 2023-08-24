import { Service, errorsHandlers } from '@/modules/core'

class UserService extends Service {
  async me(token: string): Promise<UserType> {
    const response = await this.request<{ data: UserType } & ResponseErrors>({
      url: '/me',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.statusCode !== 200) {
      errorsHandlers(
        response.statusCode,
        response.body?.error as string,
        response.body?.type
      )
    }

    return response.body!.data
  }
}

export const userService = new UserService()
