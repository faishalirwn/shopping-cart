import "../styles/Container.css";
import { Link } from "react-router-dom";
import CartIndicator from "./CartIndicator";

function Container(props) {
  return (
    <div class="container">
      <header>
        <nav>
          <Link to="/">Ado Merch</Link>
          <div class="nav-right">
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
              <CartIndicator quantity={1} />
            </Link>
          </div>
        </nav>
      </header>
      {props.children}
    </div>
  );
}

export default Container;
