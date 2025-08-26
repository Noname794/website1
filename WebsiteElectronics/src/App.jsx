import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import AdminPage from './components/AdminPage'
import AddUpdateUser from './components/AddUpdateUser'
import ListProducts from './components/ListProducts'
import ManagerProducts from './components/ManagerProducts'
import AddUpdateProduct from './components/AddUpdateProduct'
import ShoppingCart from './components/ShoppingCart'
import DetailProduct from './components/DetailProduct'
import Header1 from './components/Header1'

const App = () => {
  const [count, setCount] = useState(0)
  const location = useLocation();
  // Ẩn Header1 nếu là trang admin
  const hideHeader = location.pathname === '/admin' || location.pathname === '/2';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: 0, margin: 0, gap: 0 }}>
      {!hideHeader && <Header1 />}
      <div style={{ flex: 1, padding: 0, margin: 0 }}>
        <Routes>
          <Route path='/RegisterForm' element={<RegisterPage />} />
          <Route path='/LoginForm' element={<LoginPage />} />
          <Route path='/managerProduct' element={<ManagerProducts />} />
          <Route path='/1' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route path='/card' element={<ShoppingCart />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/2' element={<AdminPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/update-user/:id' element={<AddUpdateUser />} />
          <Route path='/add-user' element={<AddUpdateUser />} />
          <Route path='/list-products' element={<ListProducts />} />
          <Route path='/manager/products/add' element={<AddUpdateProduct />} />
          <Route path='/manager/products/edit/:id' element={<AddUpdateProduct />} />
          <Route path='/manager/products/update/:id' element={<AddUpdateProduct />} />
          <Route path='/detail' element={<DetailProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
