import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import SignIn from "./routes/sign-in/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import Checkout from "./routes/checkout/Checkout";
/* import GlassContainer from "./components/containers/glass-container/GlassContainer"; */
import GlassMain from "./components/containers/glass-main/GlassMain";

import { AppContainer } from "./app.styles";

function App(): JSX.Element {
  return (
    <AppContainer>
      <Navigation />
      <GlassMain>
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </GlassMain>
      <Footer />
    </AppContainer>
  );
}

export default App;
