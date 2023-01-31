import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import Link from "next/link";

export const index = ({ products, addToCart }) => {
  const itemsPerPage = 12;
  // get page query (if it exists). Make sure it's larger than 1
  var page = Number(useRouter().query["page"] ?? 1);
  page = page < 1 ? 1 : page;

  // get pagination page links to show
  var pages = [];
  for (
    var x = page - 2 < 1 ? 1 : page;
    x <= Math.min(page + 2, Math.ceil(products.length / itemsPerPage));
    x++
  ) {
    pages.push(x);
  }

  return (
    <div>
      <div className="products-page">
        <div className="title container mb-16">
          <h1>Products</h1>
        </div>

        {/* Products List */}
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {
              // filtering out products where minSenderDenomination is not set for simplicity
              // using just the min card amount as the value for simplicity (and to keep only ids and quantity in cart state)
              products
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((product, i) => (
                  <ProductCard
                    key={i}
                    product={product}
                    addToCart={addToCart}
                  />
                ))
            }
          </div>

          {/* Products pagination links */}
          <div className="flex justify-center">
            <div className="pagination text-center mt-8 mb-10 inline-block rounded-md">
              {pages.map((item, i) => {
                return (
                  <Link
                    href={"/?page=" + item}
                    key={i}
                    className={
                      "pagination-link px-2 py-1" +
                      (item == page ? " active" : "")
                    }
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
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
  // filter out products that have a set minSenderDenomination
  const products = await resp["data"]["giftCardsRLD"]["content"].filter(
    (product) => product["minSenderDenomination"]
  );

  // Pass data to the page via props
  return { props: { products: products } };
}

export default index;
