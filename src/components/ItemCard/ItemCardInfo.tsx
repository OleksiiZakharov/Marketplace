import { IItemParams } from '../../interface/IItem'
import css from './css/card.module.css'
import spritesCss from './css/sprites.module.css'
import classCss from './css/class.module.css'
import { useItems } from './hooks/useItems'
import { ItemParams } from './ui/ItemParams'

interface IProps {
  item: IItemParams
  children?: JSX.Element
}

export default function ItemCardInfo({ item, children }: IProps) {
  const { abilities, iconStyle } = useItems()

  return (
    <div
      className={`${css[`auction-card-grade-${item.grade}`]} ${
        css[`auction-card-grade`]
      } ${css['auction-card']}`}
    >
      <div className="d-flex">
        <div>
          <div
            className={`${css['auction-card-icon']} ${
              spritesCss[item.icon.sprite]
            }`}
            style={{
              backgroundPosition: `${item.icon.y}px ${item.icon.x}px`,
            }}
          ></div>
          <div
            className={`${css['auction-icon']} ${
              classCss[iconStyle(item.race, 'race')]
            }`}
          ></div>
          <div
            className={`${css['auction-icon']} ${
              classCss[iconStyle(item.pt_type, 'pt')]
            }`}
          ></div>
        </div>
        <ItemParams item={item}></ItemParams>
      </div>
      <div className={css['abilities-block']}>
        {item.abilities.map((ability, index) =>
          ability.num > 0 ? (
            <div key={index}>
              {abilities[ability.num]}: {ability.val}
            </div>
          ) : (
            <div key={index}>---</div>
          )
        )}
      </div>
      {children}
    </div>
  )
}
