import { useEffect } from "react";

function Cart(props) {
  const { cart } = props;
  useEffect(() => {
    document.title = "Cart";
  });
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.map((item, i) => (
        <div>
          <img src={item.img[0]} alt="" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <input type="number" id="" value={item.quantity} />
        </div>
      ))}
    </div>
  );
}

export default Cart;
