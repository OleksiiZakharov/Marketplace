import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUserData } from '../../slices/userSlice'
import { UserService } from './service/user.service'
import useMessage from './../Message/hooks/useMessage'
import { ILoginApiResponce } from '../../interface/IAccount'

interface ILoginApi {
  login: string
  password: string
}
export const LoginApi = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { setMessage } = useMessage()
  return useMutation(
    'UserApi_login',
    ({ login, password }: ILoginApi) => UserService.login(login, password),
    {
      onSuccess: ({ data }) => {
        const { status, message, responce }: ILoginApiResponce = data
        setMessage(status, message)

        if (data.status === 'success') {
          dispatch(
            updateUserData({
              login: responce.login,
              token: responce.token,
              cash: responce.cash,
              userId: responce.id,
            })
          )
          navigate('/')
        }
      },
    }
  )
}

interface ILoginApi {
  login: string
  password: string
}
export const RegistrationApi = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { setMessage } = useMessage()
  return useMutation(
    'UserApi_registration',
    ({ login, password }: ILoginApi) =>
      UserService.registration(login, password),
    {
      onSuccess: ({ data }) => {
        const { status, message, responce } = data
        setMessage(status, message)

        if (data.status === 'success') {
          dispatch(
            updateUserData({
              login: responce.login,
              token: responce.token,
              cash: responce.cash,
              userId: responce.id,
            })
          )
          navigate('/')
        }
      },
    }
  )
}

interface IChangePasswordApi {
  login: string
  token: string
  password: string
}
export const ChangePasswordApi = () => {
  const { setMessage } = useMessage()
  return useMutation(
    'UserApi_changePassword',
    ({ login, token, password }: IChangePasswordApi) =>
      UserService.changePassword(login, token, password),
    {
      onSuccess: ({ data }) => {
        const { status, message } = data
        setMessage(status, message)
      },
    }
  )
}
