import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";

import Header from "./components/Layout/Header";
import Materials from "./components/Materials/Materials";
import CartProvider from "./store/CartProvider";
import Boards from "./components/Materials/Boards/Boards";
import { Route, Routes } from "react-router";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
          <Routes>
            <Route path="/" element={<Materials />} />
            <Route path="/boards" element={<Boards />} />
          </Routes>
    </CartProvider>
  );
}

export default App;
