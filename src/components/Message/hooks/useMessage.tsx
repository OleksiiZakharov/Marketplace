import { useDispatch } from 'react-redux'
import { resetMessage, updateMessage } from '../../../slices/messageSlice'

export default function useMessage() {
  const dispatch = useDispatch()
  const setMessage = (
    status: string,
    message: string,
    timeout: number = 5000
  ) => {
    dispatch(updateMessage({ status, message }))
    setTimeout(() => {
      dispatch(resetMessage())
    }, timeout)
  }
  return { setMessage }
}
