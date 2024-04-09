import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global/App.scss";
import Home from "./components/Home/index.tsx";
import NotFound from "./components/NotFound.tsx";
import Global from "./components/Global/index.tsx";
import Regional from "./components/Regional/index.tsx";
import CardsList from "./components/CardsList/index.tsx";
import StoreSearch from "./components/StoreSearch/index.tsx";
import Local from "./components/Local/index.tsx";

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
          <Route path="/*" element={<NotFound />} />
          {/* <Route path="/test" element={<StoreSearch />} /> */}
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;