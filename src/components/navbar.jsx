import React from "react";
import BiT from "../assets/images/Bit.jpg";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

const Navbar = ({ getUsers }) => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center">
          <div className="logo">
            <img src={BiT} alt="Logo" />
          </div>
          <button onClick={getUsers} className="btn btn-primary">
            Get Users
          </button>
        </div>
      </nav>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
}

export default connect(null, mapDispatchToProps)(Navbar);
