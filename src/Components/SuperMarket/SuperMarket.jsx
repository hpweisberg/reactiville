import '../../styles/super-market.css'

import { useState } from 'react'

import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

// Components & Data
import { products } from '../../data/market-data'
import CategoryMenu from './CategoryMenu'

const SuperMarket = () => {
  console.log('Imported product data:::', products)

  const [cart, setCart] = useState([])
  //! Answer for next part(selected category)
  const [productCategory, setProductCategory] = useState('Produce')

  const updateProductCategory = (category) => {
    setProductCategory(category)
  }

  return (
    <div className="super-market">
      <section>
      <h1>{productCategory}</h1>
        <MarketNav products={products} updateProductCategory={updateProductCategory}/>
        <DisplayProducts products={products} productCategory={productCategory}/>
      </section>

      <Cart />

    </div>
  )
}

export default SuperMarket