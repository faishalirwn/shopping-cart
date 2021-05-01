import "../styles/ProductDetail.css";
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
      <img src={product.img} alt="" />
      <div>
        <h1>{product.name}</h1>
        <p class="product-detail-price">${product.price}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
          repellendus sapiente doloribus quas in, recusandae dolore voluptatem
          beatae vero aliquid laudantium suscipit cupiditate veniam porro
          laborum veritatis esse quam.
        </p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
