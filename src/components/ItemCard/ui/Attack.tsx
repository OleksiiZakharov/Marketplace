interface Props {
  min: number
  max: number
}

export default function Attack({ min, max }: Props) {
  return (
    <div>
      <span>Damage:</span>{' '}
      <span>
        {min} - {max}
      </span>
    </div>
  )
}
