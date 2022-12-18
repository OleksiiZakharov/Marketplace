import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { IItemsListApiResponce } from '../../interface/IItem'
import { RootState } from '../../store'
import CardSellBlock from '../ItemCard/CardSellBlock'
import ItemCardInfo from '../ItemCard/ItemCardInfo'
import { CartItemsList, SellItem } from './CartApi'

export default function Items() {
  const { login, token } = useSelector((state: RootState) => state.user)

  if (!login || !token) {
    return <Navigate to="/" />
  }

  const { isLoading, data, isSuccess } = CartItemsList(login, token)
  const { mutateAsync } = SellItem()

  const itemsList: IItemsListApiResponce[] =
    isSuccess === true ? data?.data.responce.itemsList : []

  const mutateHandler = (itemId: number, price: number) => {
    mutateAsync({ login, token, itemId, price })
  }

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <h4>Loading...</h4>
        </div>
      ) : null}
      {isSuccess === true && itemsList?.length === 0 ? (
        <div className="text-center">
          <h4>Items not found</h4>
        </div>
      ) : null}
      {isSuccess === true && itemsList?.length > 0
        ? itemsList.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4"
            >
              <ItemCardInfo item={item.data}>
                <CardSellBlock
                  sellItemHandler={mutateHandler}
                  id={item.id}
                  price={item.price}
                />
              </ItemCardInfo>
            </div>
          ))
        : null}
    </>
  )
}
