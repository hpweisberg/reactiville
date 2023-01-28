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
  //!// Answer for next part(selected category)
  const [productCategory, setProductCategory] = useState('Produce')

  const updateProductCategory = (category) => {
    setProductCategory(category)
  }

  const addToCart = (item) => {
    console.log('addToCart works!!!', item)
    const isItemInCart = cart.some((prod) => prod.id === item.id)
    if (isItemInCart){
    setCart(cart.map((prod) => prod.id === item.id 
    ? {...prod, quantity: prod.quantity + 1}
    : prod
    ))
    } else {
      setCart([{ ...item, quantity: 1 }, ...cart])
    }
  }

  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} updateProductCategory={updateProductCategory}/>
        <DisplayProducts products={products} productCategory={productCategory} addToCart={addToCart}/>
      </section>

      <Cart cart={cart}/>

    </div>
  )
}

export default SuperMarket