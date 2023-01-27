import Product from "./Product"

const DisplayProducts = ({productCategory, products}) => {
  const selectedProducts = products.map((product, idx) => {
    return product.category === productCategory && <Product key={idx} product={product} />
  })
  return (
    
    <div className="product-list">
      {selectedProducts}
    </div>
    // <div className="product-list">
    //   {products.map(product => {
    //     if (product.category === productCategory){
    //       return <div>
    //         <Product productName={product.name} price={product.price} image={product.image}/>
    //         {/* {product.name} */}
            
    //         </div>
    //     }
    //   })}
    // </div>
  )
}

export default DisplayProducts
