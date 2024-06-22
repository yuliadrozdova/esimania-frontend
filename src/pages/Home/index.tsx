import * as React from "react";
import Header from "../../components/common/Header/index.tsx";
import StoreSearch from "../../components/common/StoreSearch/index.tsx";
import Footer from "../../components/common/Footer/index.tsx";

const HomePage: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <h1 className="main-title typo-h1">
        Stay connected, wherever you travel, at affordable rates
      </h1>
      <StoreSearch />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default HomePage;
