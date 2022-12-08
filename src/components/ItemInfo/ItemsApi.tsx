import { useQuery } from 'react-query'
import useMessage from '../Message/hooks/useMessage'
import { ItemsService } from './service/items.service'

export const ItemInfoByIdApi = (itemId: number) => {
  const { setMessage } = useMessage()

  return useQuery(['ItemsApi_infoById'], () => ItemsService.infoById(itemId), {
    onSuccess: ({ data }) => {
      const { status, message } = data
      setMessage(status, message)
    },
  })
}

export const ItemTradeHistoryApi = (itemId: number) => {
  const { setMessage } = useMessage()

  return useQuery(
    ['ItemsApi_tradeHistory'],
    () => ItemsService.tradeHistory(itemId),
    {
      onSuccess: ({ data }) => {
        const { status, message } = data
        setMessage(status, message)
      },
    }
  )
}
