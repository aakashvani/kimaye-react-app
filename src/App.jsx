import Header from "./components/Header/header";
import LandingPage from "./pages/LangingPage/LandingPage";
// import { ProductPage,All } from "./pages/ProductPage/ProductPage";
import { All } from "./pages/ProductPage/All";
import { ProductDetails } from "./pages/ProductPage/ProductDetail";


// import ProductsDetailPage from "./pages/ProductsDetailPage/ProductsDetailPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignPage from "./pages/Signpage/SignPage";
import PaymentPage from "./pages/Paymentpage/PaymentPage";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/footer";

import { Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <Header />
    <main style={{ minHeight: "93vh" }}>
      {/* <ProductPage/> */}
      <Routes>
        <Route path="/" element={<LandingPage />} exact></Route>
        <Route path="/SignPage" element={<SignPage />}></Route>
        {/* <Route path="/allFruits" element={<ProductPage />}></Route> */}
        <Route path="/allfruits" element={<All />}></Route>
        <Route
          path="/allfruit/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/CartPage" element={<CartPage />}></Route>
        <Route path="/PaymentPage" element={<PaymentPage />}></Route>
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
