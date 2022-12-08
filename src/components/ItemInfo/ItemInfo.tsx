import { useParams } from 'react-router-dom'
import ItemInfoCard from './ItemInfoCard'
import PriceChart from './PriceChart'

export default function ItemInfo() {
  const { id } = useParams()

  if (!id || Number(id) <= -1) {
    return <div>Item not found</div>
  }

  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
        <ItemInfoCard id={+id} />
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-8 col-xxl-8 mt-2">
        <PriceChart id={+id} />
      </div>
    </div>
  )
}
