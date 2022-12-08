import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'
import { ItemTradeHistoryApi } from './ItemsApi'

interface IProps {
  id: number
}
export default function PriceChart({ id }: IProps) {
  const { data, isLoading, isSuccess } = ItemTradeHistoryApi(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  const response: [] = isSuccess ? data.data.responce : null

  return response.length === 0 ? (
    <div>No data</div>
  ) : (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={response}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="trade_date" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  )
}
