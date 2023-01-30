import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import './styles/App.css'
import Nav from './Components/Nav/Nav'

import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'

// Components
import Landing from './Components/Landing/Landing'
import Wallet from './Components/Nav/Wallet'

const App = (props) => {

  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
    if (cash - amt > 0) setCash((cash - amt).toFixed(2))

  }

  return (
    <>
      <Nav cash={cash}></Nav>
    <main>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/burgers' element={<BurgerShop />} />
        <Route path='/market' element={<SupermkdMarket {...props}handleExchange={handleExchange} />} />
      </Routes>
    </main>
    </>
  )
}

export default App