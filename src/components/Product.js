function Product(props) {
  return (
    <div className="product">
      <img src={props.img[0]} alt="" />
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
