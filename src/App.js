import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";

import Header from "./components/Layout/Header";
import Materials from "./components/Materials/Materials";
import CartProvider from "./store/CartProvider";
import Boards from "./components/Materials/Boards/Boards";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

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
          <div>
            <Link to="/">Home</Link>
          </div>
          <Routes>
            <Route path="/" element={<Materials />} />
            <Route path="/boards" element={<Boards />} />
          </Routes>
    </CartProvider>
  );
}

export default App;
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           <Route path="/about" element={<About />}/>
//           <Route path="/users" element={<Users />}/>
//           <Route path="/" element={ <Home />}>

//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
