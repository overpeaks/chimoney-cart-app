const cart = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
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
  const data = await resp["data"]["giftCardsRLD"]["content"];

  // Pass data to the page via props
  return { props: { products: products } };
}

export default cart;
