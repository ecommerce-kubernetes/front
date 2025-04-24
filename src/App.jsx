import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import OrderListPage from "./pages/mypage/order/OrderListPage";
import CartPage from "./pages/cart/CartPage";
import RedeemCouponPage from "./pages/mypage/coupon/redeem/RedeemCouponPage";
import MyCouponPage from "./pages/mypage/coupon/my/MyCouponPage";
import DeliveryAddressPage from "./pages/mypage/deliveryAddress/DeliveryAddressPage";
import RegistDeliveryAddressPage from "./pages/mypage/deliveryAddress/regist/RegistDeliveryAddressPage";
import AddressPage from "./pages/mypage/deliveryAddress/regist/AddressPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/main"} replace />} />
      <Route path="/main" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/my/orders" element={<OrderListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/my/coupon/redeem" element={<RedeemCouponPage />} />
      <Route path="/my/coupon" element={<MyCouponPage />} />
      <Route path="/my/delivery" element={<DeliveryAddressPage />} />
      <Route
        path="/my/delivery/regist"
        element={<RegistDeliveryAddressPage />}
      />
      <Route path="/my/delivery/regist/address" element={<AddressPage />} />
    </Routes>
  );
}

export default App;
