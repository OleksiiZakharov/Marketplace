import { IItemsListApiResponce } from '../../interface/IItem'
import ItemCardInfo from '../ItemCard/ItemCardInfo'
import CardBuyBlock from '../ItemCard/CardBuyBlock'
import { BuyItem } from '../Marketplace/MarketplaceApi'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { ItemInfoByIdApi } from './ItemsApi'

interface IProps {
  id: number
}

export default function ItemInfoCard({ id }: IProps) {
  const { login, token, userId } = useSelector((state: RootState) => state.user)
  const { mutateAsync } = BuyItem()
  const mutateHandler = (itemId: number) => {
    mutateAsync({ login, token, itemId })
  }

  const { data, isLoading, isSuccess } = ItemInfoByIdApi(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  const responce: IItemsListApiResponce = isSuccess ? data.data.responce : null

  return isSuccess ? (
    <ItemCardInfo item={responce.data}>
      <CardBuyBlock
        buyItemHandler={mutateHandler}
        id={responce.id}
        price={responce.price}
        login={login}
        isOwner={userId === +responce.owner_id ? true : false}
      />
    </ItemCardInfo>
  ) : null
}
