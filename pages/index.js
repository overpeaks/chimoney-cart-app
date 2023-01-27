import ProductCard from "@/components/ProductCard";

export const index = ({ products }) => {
  return (
    <div>
      <div className="products-page">
        <div className="title container">
          <h2>Products</h2>
        </div>

        {/* Products List */}
        <div className="container">
          <div className="grid grid-cols-4 gap-8">
            {products.slice(0, 2).map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
        {/* End Products List */}
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

export default index;
