import * as React from "react";

const ProductCard = ({ product, addProductToCart }) => {
  return (
    <div className="text-center mb-7">
      <img
        className="img-fluid mb-4 shadow-md rounded-lg"
        src={product["img"]}
        alt=""
      />
      <p className="title mb-0">{product["productName"]}</p>
      <p className="text-xs font-normal">Gift Card</p>
      <p className="font-medium">${product["minSenderDenomination"]}</p>
      <button
        className="mx-auto px-4 py-1 border-stone-900 border rounded-md hover:bg-stone-900 hover:text-white transition-all"
        onClick={() => addProductToCart(product["productId"])}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
