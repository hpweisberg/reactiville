import CategoryMenu from "./CategoryMenu"

const MarketNav = ({ products, updateProductCategory }) => {
  return (
    <nav>
      <h1>Super Market</h1>
      <CategoryMenu products={products} updateProductCategory={updateProductCategory}/>
      <button id="cart-button"></button>
    </nav>
  )
}

export default MarketNav
