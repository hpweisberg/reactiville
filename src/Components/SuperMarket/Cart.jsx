import CartItem from "./CartItem"

const Cart = ({cart}) => {
  return (
    <div className="cart">
      <h3>Cart</h3>
      
      <div>
        {cart.map((item, idx) => (
          <CartItem
          key={idx}
          item={item}
          />
          
        ))}
      </div>

      <div className="cart-total">
        <p>Total:</p>
        <p>$ Display Amount Here</p>
      </div>

      <button>CHECKOUT</button>
      <button>CLEAR CART</button>
    </div>
  )
}

export default Cart