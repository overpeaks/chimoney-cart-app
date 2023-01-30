import Link from "next/link";

const Header = ({ totalQuantity, showAddToCartTooltip }) => {
  return (
    <div>
      <div className="mb-28">
        <div className="navbar py-5 fixed top-0 left-0 right-0 bg-white">
          <div className="container">
            <div className="flex flex-auto justify-between items-center">
              <div className="font-bold">WorldShop</div>
              <div className="menu-items flex items-center gap-6">
                <div className="home">
                  <Link href="/">Products</Link>
                </div>
                <div className="cart relative">
                  <Link href="/cart">
                    <img
                      className="cart-img"
                      src="/shopping-bag.png"
                      alt="Shopping Cart"
                    />
                    <span className="total-quantity">{totalQuantity}</span>
                  </Link>
                  <span
                    className={
                      "cart-notify rounded-md py-1 px-2 text-sm" +
                      (showAddToCartTooltip ? "" : " hidden")
                    }
                  >
                    Item added to Cart!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
