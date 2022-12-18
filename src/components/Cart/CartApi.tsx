import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalItemsCount } from '../../slices/paginationSlice'
import { RootState } from '../../store'
import useMessage from '../Message/hooks/useMessage'
import { CartService } from './cart.service'

export const CartItemsList = (login: string, token: string) => {
  const dispatch = useDispatch()
  const { setMessage } = useMessage()

  const { categories, grades, races, page, onPage } = useSelector(
    (state: RootState) => state.filters
  )
  return useQuery(
    ['CartApi_itemsList', page, onPage, categories, grades, races],
    () =>
      CartService.itemsList(
        login,
        token,
        categories,
        grades,
        races,
        onPage,
        page
      ),
    {
      onSuccess: ({ data }) => {
        const { status, message, responce } = data
        if (status === 'error') {
          setMessage(status, message)
        }
        dispatch(setTotalItemsCount(responce.itemsCount))
      },
    }
  )
}

interface ISellItem {
  login: string
  token: string
  itemId: number
  price: number
}
export const SellItem = () => {
  const queryClient = useQueryClient()
  const { setMessage } = useMessage()
  return useMutation(
    'UserApi_login',
    ({ login, token, itemId, price }: ISellItem) =>
      CartService.sellItem(login, token, itemId, price),
    {
      onSuccess: ({ data }) => {
        const { status, message } = data
        setMessage(status, message)
        queryClient.refetchQueries('CartApi_itemsList')
      },
    }
  )
}
