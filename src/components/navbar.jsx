import React from "react";
import BiT from "../assets/images/Bit.jpg";

const Navbar = ({ handleFetchData }) => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center">
          <div className="logo">
            <img src={BiT} alt="Logo" />
          </div>
          <button onClick={handleFetchData} className="btn btn-primary">
            Get Users
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
