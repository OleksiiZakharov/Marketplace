import Attack from './Attack'
import Upgrade from './Upgrade'
import css from '../css/card.module.css'
import { IItemParams } from '../../../interface/IItem'

interface IItemParamsProps {
  item: IItemParams
}

export const ItemParams = ({ item }: IItemParamsProps) => {
  return (
    <div className={`flex-fill ${css['card-info-block']}`}>
      <div className="fw-semibold d-flex">{item.name}</div>

      <div>
        <span>Level:</span> <span>{item.level}</span>
      </div>

      {item.attack.gamax > 0 && item.attack.mamax <= 0 ? (
        <Attack min={item.attack.gamin} max={item.attack.gamax}></Attack>
      ) : null}

      {item.attack.mamax > 0 ? (
        <Attack min={item.attack.mamin} max={item.attack.mamax}></Attack>
      ) : null}

      {item.defence > 0 ? (
        <div>
          <span>Defence:</span> <span>{item.defence}</span>
        </div>
      ) : null}

      {item.upgrade ? <Upgrade upgrade={item.upgrade}></Upgrade> : null}
    </div>
  )
}
