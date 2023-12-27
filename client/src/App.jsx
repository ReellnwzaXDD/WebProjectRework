import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Main from './components/Page/main'
import Error from './components/Page/Error';
import Login from './components/Page/login';
import Register from './components/Page/register';
import Logout from './components/Page/logout';
import Cart from './components/Page/cart';
import Navbar from './components/shared/navbar';
import AddressForm from './components/Page/checkout/addressform';
import Store from './components/Page/Store';
import ProductsContextProvider from './components/Page/Productscontext';
import CartContextProvider from './components/Page/cartcontext';
function App() {
  
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/shop' element={<Store />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<AddressForm />} />
                <Route path='*' element={<Error />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>

   
  )
}

export default App
