import { useState } from 'react'
import { BrowserRouter , NavLink, Routes, Route} from 'react-router-dom';
import Main from './components/Main'
import Login from './components/Page/login';
import Error from './components/Page/Error';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header>
        <h1>Hello word</h1>
      </header>
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="/Main">Main</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/Login' element={<Login />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
