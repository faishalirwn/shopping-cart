import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const { name } = useParams();

  const product = props.products.filter((product) => product.name === name)[0];

  useEffect(() => {
    document.title = product.name;
  });

  return (
    <div className="product-detail">
      <h1>Product Detail</h1>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.img}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductDetail;
