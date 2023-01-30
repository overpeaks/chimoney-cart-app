import Header from "./Header";
// import Meta from "./Meta";
// import Footer from "./Footer";

const Layout = ({ children, totalQuantity, showAddToCartTooltip }) => {
  return (
    <div>
      {/* <Meta /> */}
      <Header
        totalQuantity={totalQuantity}
        showAddToCartTooltip={showAddToCartTooltip}
      />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
