import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/Checkout/Checkout";
import GiftCard from "./components/GiftCard/GiftCard";
import PreviousOrder from "./components/Orders/PreviousOrder"
import OrderDetails from "./components/Orders/OrderDetails"
import MapDemo from "./components/Map/MapDemo"

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
          <Route path="/previousorders" element={<PreviousOrder />} />
        </Routes>
        <Routes>
          <Route path="/orderDetails" element={<OrderDetails />} />
        </Routes>
        <Routes>
          <Route path="/map" element={<MapDemo />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
