import React, { useEffect, useState } from "react";
import Logo from "../assets/images/brand.svg";
const Navbar = () => {
  return (
    <>
      <div className="navigation navbar navbar-light justify-content-center py-xl-7">
        <a href="#" className="d-none d-xl-block mb-6">
          <img
            src={Logo}
            className="mx-auto fill-primary"
            data-inject-svg=""
            alt="Logo"
            style={{ height: "46px" }}
          />
        </a>
      </div>
    </>
  );
};

export default Navbar;
