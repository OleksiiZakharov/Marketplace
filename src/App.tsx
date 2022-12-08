import { ReactQueryDevtools } from 'react-query/devtools'
import { Route, Routes } from 'react-router-dom'
import Marketplace from './components/Marketplace/Marketplace'
import Message from './components/Message/Message'
import Navigation from './components/Navigation/Navigation'
import Registration from './components/Account/Registration'
import Login from './components/Account/Login'
import Cart from './components/Cart/Cart'
import ItemInfo from './components/ItemInfo/ItemInfo'

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Navigation />
        </div>
        <Message />
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/info/:id" element={<ItemInfo />} />
        </Routes>
      </div>
      <ReactQueryDevtools></ReactQueryDevtools>
    </>
  )
}

export default App
