import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/login/Login";
import CommodityPage from "./page/commodity/CommodityPage";
import ClientPage from "./page/client/ClientPage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/commodity" element={<CommodityPage />}></Route>
      <Route path="/client" element={<ClientPage />}></Route>
    </Routes>
  );
};

export default Router;
