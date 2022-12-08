import { VscInfo } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import css from './css/card.module.css'

interface IProps {
  id: number
  price: number
  login: string
  isOwner: boolean
  buyItemHandler: (id: number) => void
}

export default function CardBuyBlock({
  id,
  price,
  login,
  buyItemHandler,
  isOwner,
}: IProps) {
  const navigate = useNavigate()
  const infoHandler = (itemId: number) => {
    navigate(`/info/${itemId}`)
  }

  return (
    <div className={css['card-price-block']}>
      <span className="fw-semibold">Price: {price.toLocaleString()}</span>
      <div>
        {login.length === 0 ? null : !isOwner ? (
          <button
            className={`btn btn-success btn-sm me-2`}
            onClick={() => buyItemHandler(id)}
          >
            Buy
          </button>
        ) : (
          <button className={`btn btn-sm ${css.ownerBadge}`} disabled={true}>
            OWNER
          </button>
        )}

        <div
          className={`btn btn-sm ${css.cardInfoBtn}`}
          onClick={() => infoHandler(id)}
        >
          <VscInfo />
        </div>
      </div>
    </div>
  )
}
