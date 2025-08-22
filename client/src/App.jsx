import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthRegister from './pages/auth/register'
import Authlogin from './pages/auth/login'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminFeatures from './pages/admin-view/features'
import AdminOrders from './pages/admin-view/orders'
import AdminProducts from './pages/admin-view/products'
import ShoppingLayout from './components/shopping-view/layout'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingListing from './pages/shopping-view/listing'
import CheckAuth from './components/common/check-auth'

function App() {
   const  isAuthenticated=false;
   const user=null;
    // const  user={
    //   name:'sadia',
    //   role:'user'
    // };
  return (
    <>
    <Routes>
      <Route path="/auth" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
           <AuthLayout/>
        </CheckAuth>
      }>
       <Route path="login" element={<Authlogin/>}/>
       <Route path="register" element={<AuthRegister/>}/>
      </Route>

    <Route path="/admin"  element={
      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <AdminLayout/>
      </CheckAuth>
      }>
    <Route  path="dashboard"  element={<AdminDashboard/>} />
     <Route  path="features"  element={<AdminFeatures/>} />
      <Route  path="orders"  element={<AdminOrders/>} />
       <Route  path="products"  element={<AdminProducts/>} />
    </Route>

    <Route path="/shop" element={
      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <ShoppingLayout/>
      </CheckAuth>
      }>
        <Route  path="account"  element={<ShoppingAccount/>} />
        <Route  path="checkout"  element={<ShoppingCheckout/>} />
        <Route  path="home"  element={<ShoppingHome/>} />
        <Route  path="listing"  element={<ShoppingListing/>} />
    </Route>
    </Routes>
    </>
  )
}

export default App
