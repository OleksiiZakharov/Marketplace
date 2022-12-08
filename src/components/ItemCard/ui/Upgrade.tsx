import spritesCss from '../css/sprites.module.css'

interface Props {
  upgrade: string
}

export default function Upgrade({ upgrade }: Props) {
  const talics: string[] = upgrade.split('')
  const upgradeCount: number = Number(talics[0])

  return (
    <div>
      {upgradeCount === 0 ? null : (
        <>
          <span>Upgrade:</span>
          <span>
            {talics.map((talic, index) => {
              if (upgradeCount === 0 || index > upgradeCount || index === 0)
                return ''
              return (
                <div
                  className={`${spritesCss.talic} ${
                    spritesCss[`talic_${talic}`]
                  }`}
                  key={index}
                ></div>
              )
            })}
          </span>
        </>
      )}
    </div>
  )
}
