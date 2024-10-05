import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Card from './component/Card'
import {BrowserRouter as Router , Route , Routes, Link} from 'react-router-dom'
import Cart from './component/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Router>
      <nav>
        <Link to="/" > Home</Link>
        <Link to="/cart"> Cart</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
   
     
      
    </>
  )
}

export default App
