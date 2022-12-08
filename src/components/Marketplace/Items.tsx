import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { BuyItem, ItemsListApi } from './MarketplaceApi'
import { IItemsListApiResponce } from '../../interface/IItem'
import ItemCardInfo from '../ItemCard/ItemCardInfo'
import CardBuyBlock from '../ItemCard/CardBuyBlock'

export default function Items() {
  const { isLoading, data, isSuccess } = ItemsListApi()
  const { login, token, userId } = useSelector((state: RootState) => state.user)
  const { mutateAsync } = BuyItem()
  const itemsList: IItemsListApiResponce[] =
    isSuccess === true ? data?.data.responce.itemsList : []

  const mutateHandler = (itemId: number) => {
    mutateAsync({ login, token, itemId })
  }
  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <h4>Loading...</h4>
        </div>
      ) : null}
      {!isLoading && itemsList.length === 0 ? (
        <div className="text-center">
          <h4>Items not found</h4>
        </div>
      ) : null}
      {isSuccess === true
        ? itemsList.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4"
            >
              <ItemCardInfo item={item.data}>
                <CardBuyBlock
                  buyItemHandler={mutateHandler}
                  id={item.id}
                  login={login}
                  price={item.price}
                  isOwner={userId === +item.owner_id ? true : false}
                />
              </ItemCardInfo>
            </div>
          ))
        : null}
    </>
  )
}
