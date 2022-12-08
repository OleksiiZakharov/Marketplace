import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'
import Items from './Items'

export default function Marketplace() {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
        <Filters />
      </div>
      <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
        <div className="row">
          <Pagination />
        </div>
        <div className="row">
          <Items />
        </div>
      </div>
    </div>
  )
}
