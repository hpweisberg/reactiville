import CartItem from "./CartItem"



const Cart = ({props, cart, setCart, handleRemoveFromCart, handleClearCart, handleExchange }) => {


  const priceFormat = (num) => (Math.round(num * 100) /100).toFixed(2)
  const totalPrice = priceFormat(cart.reduce((sum, item) => {
    return item.quantity > 1
    ? sum + (item.price * item.quantity)
    : sum + item.price
  }, 0)) 

  const clearCart = () => {
    setCart([])
  }

  const handleCheckout = () => {
    props.handleExchange(totalPrice)
    clearCart()
  }


  return (
    <div className="cart">
      <h3>Cart</h3>

      <div>
        {cart.map((item, idx) => (
          <CartItem
          key={idx}
          item={item}
          handleRemoveFromCart={handleRemoveFromCart}
          />
          
        ))}
      </div>

      <div className="cart-total">
        <p>Total:</p>
        <p>${totalPrice}</p>
      </div>

      <button onClick={handleCheckout}>CHECKOUT</button>
      <button onClick={handleClearCart}>CLEAR CART</button>
    </div>
  )
}

export default Cart