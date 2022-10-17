import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import { AppContainer } from "./app.styles";

function App(): JSX.Element {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
