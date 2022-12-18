import axios from 'axios'

export const UserService = {
  async cash(login: string, token: string) {
    return await axios.post(
      '/user/cash',
      {
        login,
        token,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },

  async login(login: string, password: string) {
    return axios.post(
      '/user/login',
      {
        login,
        password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },

  async registration(login: string, password: string) {
    return await axios.post(
      '/user/registration',
      {
        login,
        password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },

  async changePassword(login: string, token: string, password: string) {
    return await axios.post(
      '/user/changePassword',
      {
        login,
        token,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  },
}
