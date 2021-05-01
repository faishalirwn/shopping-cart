import ProductList from "../components/ProductList";

function Shop(props) {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <ProductList products={props.products} />
    </div>
  );
}

export default Shop;
