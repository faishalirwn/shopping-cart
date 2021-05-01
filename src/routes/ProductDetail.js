import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const { name } = useParams();

  const product = props.products.filter((product) => product.name === name)[0];

  console.log(product);

  return (
    <div className="product-detail">
      <h1>Product Detail</h1>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.stock}</p>
      <p>{product.img}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductDetail;
