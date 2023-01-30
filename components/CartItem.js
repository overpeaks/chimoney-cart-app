import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({
  product,
  item,
  removeFromCart,
  updateItemQuantityCart,
}) => {
  return (
    <div className="cart-item grid grid-cols-2 md:grid-cols-6 gap-5 mb-5 pb-5 items-center text-center">
      {/* Item with image, name, and price */}
      <div className="col-span-3 flex gap-4 items-center text-left">
        <img
          className="cart-img"
          src={product["img"]}
          alt={product["productName"] + " Image"}
        />
        <div className="inline-block">
          <p className="title mb-1">{product["productName"]}</p>
          <p className="font-medium mb-0">
            ${product["minSenderDenomination"]}
          </p>
        </div>
      </div>
      <div className="quantity text-left md:text-center pl-5 md:pl-0">
        <button
          className="decrement"
          onClick={() => {
            updateItemQuantityCart(item.id, item.quantity - 1);
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          className="increment"
          onClick={() => {
            updateItemQuantityCart(item.id, item.quantity + 1);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="subtotal font-medium hidden md:block">
        {"$" + item.quantity * product["minSenderDenomination"]}
      </div>
      <div className="remove text-right md:text-center">
        <button
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          {window.innerWidth > 768 ? (
            <FontAwesomeIcon icon={faTrash} />
          ) : (
            "Remove"
          )}
        </button>
      </div>
    </div>
  );
};
export default CartItem;
