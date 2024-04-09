import * as React from "react";
import StoreSearch from "../StoreSearch/index.tsx";
import Header from "../Header/index.tsx";

const PageWithStoreSearch: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
      <React.Fragment>
        <Header />
        <h1 className='main-title'>Stay connected, wherever you travel, at affordable rates</h1>
          <StoreSearch />
          {children}
      </React.Fragment>
  );
};
export default PageWithStoreSearch;