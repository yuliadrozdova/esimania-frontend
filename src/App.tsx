import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global/App.scss";
import Login from "./pages/Auth/Login/index.tsx";
import Home from "./pages/Home/index.tsx";
import Local from "./components/Product/Local/index.tsx";
import Regional from "./components/Product/Regional/index.tsx";
import Global from "./components/Product/Global/index.tsx";
import CardsList from "./components/Product/CardsList/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";
import UserProfilePage from "./pages/Profile/index.tsx";
import BuyEsimPage from "./pages/Buy/index.tsx";
import Register from "./pages/Auth/Register/index.tsx";
import ForgotPassword from "./pages/Auth/ForgotPassword/index.tsx";
// import SomeComponent from "./components/common/Breadcrumbs/index.tsx";
// import MainComponent from "./pages/test.tsx";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home><Local /></Home>} />
          <Route path="/local-esim" element={<Home><Local /></Home>} />
          <Route path="/local-esim/:countrySlug" element={<Home><CardsList /></Home>} />
          <Route path="/regional-esim" element={<Home><Regional /></Home>} />
          <Route path="/regional-esim/:regionSlug" element={<Home><CardsList /></Home>} />
          <Route path="/global-esim" element={<Home><Global /></Home>} />
          <Route path="/profile/:profilePage" element={<UserProfilePage />} />
          <Route path="/esim-buy/:packageName" element={<BuyEsimPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />

          {/* <Route path="/test" element={<SomeComponent />} /> */}
          
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
