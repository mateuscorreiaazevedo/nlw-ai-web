import dayjs from 'dayjs'
import Cookies from 'js-cookie'

export const tokenHelper = {
  set: (value: string) => {
    Cookies.set('auth-case.token', value, {
      expires: dayjs(new Date()).add(30, 'day').toDate()
    })
  },
  get: () => {
    return Cookies.get('auth-case.token')
  }
}
