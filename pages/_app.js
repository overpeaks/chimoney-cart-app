import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState(null);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // get cart from local storage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    // if local storage data exists, set it to that, otherwise intialize to empty array
    if (cartData) {
      setCart(cartData);
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    // save cart to local storage
    if (cart != null) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // update total quantity
    if (cart != null) {
      const total = cart.reduce((total, item) => {
        return total + Number(item.quantity);
      }, 0);
      setTotalQuantity(total);
    }
  }, [cart]);

  // add product to cart
  const addProductToCart = (id) => {
    var updatedCart;
    // check if product is already in cart, and increment amount if yes
    for (var x = 0; x < cart.length; x++) {
      if (cart[x].id == id) {
        // increment item quantity if product already added
        updatedCart = cart.map((item, i) => {
          if (item.id == id) {
            item.quantity += 1;
            return item;
          } else {
            return item;
          }
        });
        setCart(updatedCart);
        return;
      }
    }

    // add item to cart if it doesn't exist
    updatedCart = [...cart, { id: id, quantity: 1 }];
    setCart(updatedCart);
  };

  return (
    <div>
      <Layout totalQuantity={totalQuantity}>
        <Component {...pageProps} addProductToCart={addProductToCart} />
      </Layout>
    </div>
  );
}
