import CartItem from "./CartItem"

const Cart = ({cart, handleRemoveFromCart, handleClearCart}) => {
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
        <p>$ Display Amount Here</p>
      </div>

      <button>CHECKOUT</button>
      <button onClick={handleClearCart}>CLEAR CART</button>
    </div>
  )
}

export default Cart