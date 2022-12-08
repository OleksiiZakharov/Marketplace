export interface ILoginForm {
  login: string
  password: string
}

export interface ILoginApiResponce {
  status: string
  message: string
  responce: {
    id: number
    login: string
    token: string
    cash: number
  }
}
