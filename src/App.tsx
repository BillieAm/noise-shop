import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import GlassContainer from "./components/containers/glass-container/GlassContainer";

import { AppContainer } from "./app.styles";

function App(): JSX.Element {
  return (
    <AppContainer>
      <Navigation />
      <GlassContainer>
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </GlassContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
