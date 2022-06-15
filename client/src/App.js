import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/Checkout/Checkout";
import GiftCard from "./components/GiftCard/GiftCard";
import Cart from "./components/Cart/Cart";
import ReviewPage from "./components/Review/ReviewPage";
import PreviousOrder from "./components/Orders/PreviousOrder"
import OrderDetails from "./components/Orders/OrderDetails"
import MapDemo from "./components/Map/MapDemo"
import Cart from "./components/Cart/Cart";
import ReviewPage from "./components/Review/ReviewPage";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="100%">
        <Navbar />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path="/giftcard" element={<GiftCard />} />
        </Routes>
        <Routes>
          <Route path = "/cart" element={<Cart/>}/>
        </Routes>
        <Routes>
          <Route path = "/reviews" element={<ReviewPage/>}/>
<<<<<<< Updated upstream
=======
          <Route path="/previousorders" element={<PreviousOrder />} />
        </Routes>
        <Routes>
          <Route path="/orderDetails" element={<OrderDetails />} />
        </Routes>
        <Routes>
          <Route path="/map" element={<MapDemo />} />
>>>>>>> 3f10f686a035596173686d5799040f5a8592a92b
=======
>>>>>>> Stashed changes
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
