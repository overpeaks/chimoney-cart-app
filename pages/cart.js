import CartItem from "@/components/CartItem";

const cartPage = ({
  products,
  cart,
  removeFromCart,
  updateItemQuantityCart,
}) => {
  return (
    <div>
      <div className="cart-page">
        <div className="title container mb-16">
          <h2>Cart</h2>
        </div>

        {/* show cart items */}
        <div className="container">
          {/* if cart is empty show message */}
          <p className={"text-center" + (cart.length == 0 ? "" : " hidden")}>
            Your cart is empty... Go add some products!
          </p>

          {/* otherwise, display cart items */}
          <div
            className={
              "cart-items-header grid grid-cols-6 gap-5 mb-6 items-center text-center pb-3" +
              (cart.length == 0 ? " hidden" : "")
            }
          >
            <p className="col-span-3 text-left">Items</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
          </div>
          <div className="cart-items">
            {cart.map((item, i) => {
              return (
                <CartItem
                  item={item}
                  key={i}
                  product={products.find((x) => x.productId == item.id)}
                  removeFromCart={removeFromCart}
                  updateItemQuantityCart={updateItemQuantityCart}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Get Products
export async function getServerSideProps() {
  // Get gift cards
  // Fetch data from external API
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": process.env.API_KEY,
    },
  };

  const resp = await (
    await fetch(process.env.API_PRODUCTS_ROUTE, options)
  ).json();
  const products = await resp["data"]["giftCardsRLD"]["content"];

  // Pass data to the page via props
  return { props: { products: products } };
}

export default cartPage;
