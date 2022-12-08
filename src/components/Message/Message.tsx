import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function Message() {
  const { message, status } = useSelector((state: RootState) => state.message)

  return message.length > 0 ? (
    <div
      id="messageBlock"
      className={`alert alert-${
        status === 'error' ? 'danger' : status
      } alert-dismissible fade show text-center`}
    >
      {message}
    </div>
  ) : (
    <div id="messageBlock"></div>
  )
}
