import { VscInfo } from 'react-icons/vsc'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IItemSellForm } from '../../interface/IItem'
import css from './css/card.module.css'

interface IProps {
  sellItemHandler: (itemId: number, price: number) => void
  id: number
  price: number
}

export default function CardSellBlock({ sellItemHandler, id, price }: IProps) {
  const { register, handleSubmit } = useForm<IItemSellForm>({
    mode: 'onBlur',
    defaultValues: {
      itemId: id,
      price,
    },
  })

  const onSubmit: SubmitHandler<IItemSellForm> = (fields) => {
    const { itemId, price } = fields
    sellItemHandler(itemId, price)
  }
  const navigate = useNavigate()
  const infoHandler = (itemId: number) => {
    navigate(`/info/${itemId}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`input-group-sm ${css['card-price-block']}`}>
        <input
          type="hidden"
          {...register('itemId', { pattern: /^[0-9.]+$/i })}
        />
        <input
          type="number"
          className="form-control"
          required={true}
          {...register('price', {
            pattern: /^[0-9.]+$/i,
          })}
        />
        <input
          type="submit"
          className={`btn btn-success btn-sm`}
          value="Sell"
        />
        <div
          className={`btn btn-sm ${css.cardInfoBtn}`}
          onClick={() => infoHandler(id)}
        >
          <VscInfo />
        </div>
      </div>
    </form>
  )
}
