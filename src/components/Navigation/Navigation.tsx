import css from './navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { resetUserData } from '../../slices/userSlice'
import UserInfo from '../Account/UserInfo'

export default function Navigation() {
  const { login } = useSelector((state: RootState) => state.user)
  const { pathname } = useLocation()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(resetUserData())
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className={css.navTitle}>MARKETPLACE</div>
        {login.length === 0 ? null : <UserInfo />}
        <button
          className={`navbar-toggler ${css.navBtn}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${css.navLinks}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav" id={css.nav}>
            <li className={`nav-item ${pathname === '/' ? css.active : ''}`}>
              <Link to="/">
                <div>Marketplace</div>
              </Link>
            </li>
            {login.length === 0 ? (
              <>
                <li
                  className={`nav-item ${
                    pathname === '/login' ? css.active : ''
                  }`}
                >
                  <Link to="/login">
                    <div>Login</div>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className={`nav-item ${
                    pathname === '/cart' ? css.active : ''
                  }`}
                >
                  <Link to="/cart">
                    <div>Cart</div>
                  </Link>
                </li>
                <li className={`nav-item`}>
                  <div onClick={() => logoutHandler()}>Logout</div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
