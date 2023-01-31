const CartSummary = ({ products, cart }) => {
  // calculate subtotal of cart
  const subtotal = cart.reduce((total, item) => {
    return (total +=
      products.find((x) => x.productId == item.id)["minSenderDenomination"] *
      item.quantity);
  }, 0);

  // function to round values to 2 decimal points
  const roundVal = (num) => {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2);
  };

  // dont show summary if cart is empty
  if (cart.length <= 0) {
    return;
  }

  return (
    <div className="container flex justify-end pt-6 pb-10 cart-summary-container">
      <div className="cart-summary">
        <h3 className="mb-6">Summary</h3>
        <p className="flex justify-between">
          Subtotal: <strong>${roundVal(subtotal)}</strong>
        </p>
        <p className="flex justify-between">
          Tax (12%): <strong>${roundVal(subtotal * 0.12)}</strong>
        </p>
        <p className="flex justify-between pt-4 mt-4 border-t border-neutral-300">
          Total: <strong>${roundVal(subtotal * 1.12)}</strong>
        </p>
      </div>
    </div>
  );
};
export default CartSummary;
