const ProductCard = ({ product }) => {
  return (
    <div>
      <img className="img-fluid mb-3" src={product["img"]} alt="" />
      <h6 className="title text-center">{product["productName"]}</h6>
      <p className="mb-5">{JSON.stringify(product)}</p>
    </div>
  );
};
export default ProductCard;
