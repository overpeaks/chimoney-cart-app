const Header = ({ totalQuantity }) => {
  return (
    <div className="mb-28">
      <div className="navbar py-5 fixed top-0 left-0 right-0 bg-white">
        <div className="container">
          <div className="flex flex-auto justify-between">
            <div>title</div>
            <div className="menu-items flex">
              <div className="cart">
                <img
                  className="cart-img"
                  src="/shopping-bag.png"
                  alt="Shopping Cart"
                />
                <span className="total-quantity">{totalQuantity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
