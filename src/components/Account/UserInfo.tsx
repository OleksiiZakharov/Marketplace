import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function UserInfo() {
  const { login, cash } = useSelector((state: RootState) => state.user)

  return (
    <>
      <div className="d-none d-lg-block me-2">Welcome {login}!</div>
      <div>Cash: {cash}</div>
    </>
  )
}
