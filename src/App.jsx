import Header from "./components/Header/header";
import LandingPage from "./pages/LangingPage/LandingPage";
import ProductsPage from "./pages/ProductsPage/Products";
import ProductsDetailPage from "./pages/ProductsDetailPage/ProductsDetailPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignPage from "./pages/Signpage/SignPage";
import PaymentPage from "./pages/Paymentpage/PaymentPage";
import Footer from "./components/Footer/footer";

import { Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <Header />
    <main style={{ minHeight: "93vh" }}>
      <Routes>
        <Route path="/" element={<LandingPage />} exact></Route>
        <Route path="/ProductsPage" element={<ProductsPage />}></Route>
        <Route path="/ProductsDetailPage" element={<ProductsDetailPage />}></Route>
        <Route path="/SignPage" element={<SignPage />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/CartPage" element={<CartPage />}></Route>
        <Route path="/PaymentPage" element={<PaymentPage />}></Route>
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
