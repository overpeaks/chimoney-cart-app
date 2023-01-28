import ProductCard from "@/components/ProductCard";

export const index = ({ products, addProductToCart }) => {
  return (
    <div>
      <div className="products-page">
        <div className="title container mb-16">
          <h2>Products</h2>
        </div>

        {/* Products List */}
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {
              // filtering out products where minSenderDenomination is not set for simplicity
              // using just the min card amount as the value for simplicity (and to keep only ids and quantity in cart state)
              products
                .filter((product) => product["minSenderDenomination"])
                .slice(0, 6)
                .map((product, i) => (
                  <ProductCard
                    key={i}
                    product={product}
                    addProductToCart={addProductToCart}
                  />
                ))
            }
          </div>
        </div>
        {/* End Products List */}
      </div>
    </div>
  );
};

// Get Products
export async function getServerSideProps() {
  console.log("test");
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
