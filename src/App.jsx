import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './styles/App.css'
import Nav from './Components/Nav/Nav'

import BurgerShop from './Components/BurgerShop/BurgerShop'

// Components
import Landing from './Components/Landing/Landing'

const App = () => {
  return (
    <main>
      <Nav></Nav>
      <Landing />
      <Routes>
        <Route path='/burgers' element={<BurgerShop />} />
      </Routes>
    </main>
  )
}

export default App