import React, { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Routers from "../routers/Router";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;