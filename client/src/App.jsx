import { useState } from 'react'
import { BrowserRouter , NavLink, Routes, Route} from 'react-router-dom';
import Main from './components/Page/main'
import Error from './components/Page/Error';
import Login from './components/Page/login';
import Register from './components/Page/register';
import Shop from './components/Page/Shop';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/magazine' element={<Main />} />
            <Route path='/custom' element={<Main />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>

   
  )
}

export default App
