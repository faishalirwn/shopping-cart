import { Link } from "react-router-dom";
import CartIndicator from "./CartIndicator";

function Container(props) {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <CartIndicator />
        </Link>
      </nav>
      {props.children}
    </div>
  );
}

export default Container;
