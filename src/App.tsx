import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global/App.scss";
import Home from "./components/Home/index.tsx";
import NotFound from "./components/NotFound.tsx";
import Global from "./components/Global/index.tsx";
import Regional from "./components/Regional/index.tsx";
import CardsList from "./components/CardsList/index.tsx";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local-esim" element={<Home />} />
          <Route path="/local-esim/:countrySlug" element={<CardsList />} />
          <Route path="/regional-esim" element={<Regional />} />
          <Route path="/regional-esim/:regionSlug" element={<CardsList />} />
          <Route path="/global-esim" element={<Global />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
