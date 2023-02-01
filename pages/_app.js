import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import { useEffect, useState, useRef } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [showAddToCartTooltip, setShowAddToCartTooltip] = useState(false);
  const timerID = useRef(null);

  // show then hide tooltip notification after add to cart click
  // Note: Continously adding products to cart without letting the timer reset will cause it to not re-appear until the timer has a chance to reset
  var delayedHideTooltip = () => {
    if (!showAddToCartTooltip) setShowAddToCartTooltip(true);
    // clear previous timer if clicked again
    clearTimeout(timerID.current);
    // hide tooltip after delay
    timerID.current = setTimeout(() => {
      setShowAddToCartTooltip(false);
    }, 3000);
  };

  // get cart from local storage and mark as loaded
  useEffect(() => {
    if (!cartLoaded) {
      const localData = JSON.parse(localStorage.getItem("cart")) ?? [];
      setCart(localData);
      setCartLoaded(true);
    }
  }, []);

  useEffect(() => {
    // save cart to local storage
    if (cartLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // update total quantity
    if (cart) {
      const total = cart.reduce((total, item) => {
        return total + Number(item.quantity);
      }, 0);
      setTotalQuantity(total);
    }
  }, [cart]);

  // add item to cart
  const addToCart = (id) => {
    // show add to cart tooltip notification
    delayedHideTooltip();

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

  // remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id != id);
    setCart(updatedCart);
  };

  // update item quantity in cart
  const updateItemQuantityCart = (id, quantity) => {
    // if item quantity is set to 0 (or negative somehow), remove instead
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    // else update quantity
    const updatedCart = cart.map((item) => {
      if (item.id == id) {
        item.quantity = quantity;
        return item;
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  };

  return (
    <div>
      <Layout
        totalQuantity={totalQuantity}
        showAddToCartTooltip={showAddToCartTooltip}
      >
        <Component
          {...pageProps}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateItemQuantityCart={updateItemQuantityCart}
          cart={cart}
        />
      </Layout>
    </div>
  );
}
