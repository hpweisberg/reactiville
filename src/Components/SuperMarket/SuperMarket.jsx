import '../../styles/super-market.css'

import { useState } from 'react'

import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

// Components & Data
import { products } from '../../data/market-data'

const SuperMarket = () => {
  console.log('Imported product data:::', products)

  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')

  return (
    <div className="super-market">
      <section>
        <MarketNav products={products}/>
        <DisplayProducts />
      </section>

      <Cart />

    </div>
  )
}

export default SuperMarket