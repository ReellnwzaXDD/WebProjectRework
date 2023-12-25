import { useState } from 'react'
import { BrowserRouter , NavLink, Routes, Route} from 'react-router-dom';
import Main from './components/Page/main'
import Error from './components/Page/Error';
import Login from './components/Page/login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/magazine' element={<Main />} />
            <Route path='/custom' element={<Main />} />
            <Route path='/shop' element={<Main />} />
            <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <nav>
    //   <NavLink to="/">Home</NavLink>
    //   <NavLink to="/Login">Login</NavLink>
    //   <NavLink to="/Main">Main</NavLink>
    //   </nav>
      // <Routes>
      //   <Route path='/' element={<Main />} />
      //   {/* <Route path='/Login' element={<Login />} /> */}
      //   <Route path='*' element={<Error />} />
      // </Routes>
    // </BrowserRouter>
  )
}

export default App
