import Header from "./Header";
// import Meta from "./Meta";
// import Footer from "./Footer";

const Layout = ({ children, totalQuantity }) => {
  return (
    <div>
      {/* <Meta /> */}
      <Header totalQuantity={totalQuantity} />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
